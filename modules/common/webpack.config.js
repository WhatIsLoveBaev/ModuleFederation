const { merge: webpackMerge } = require('webpack-merge');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ModuleFederationWebpackPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const webpackModuleConfig = require('../../config/webpack/webpack.module.config');

module.exports = webpackMerge(webpackModuleConfig({ devServerPort: 3001 }),
    {
        resolve: {
            plugins: [
                new TSConfigPathsPlugin({
                    configFile: 'tsconfig.json'
                })
            ]
        },
        plugins: [
            new ModuleFederationWebpackPlugin({
                name: 'common',
                filename: 'remoteEntry.js',
                exposes: {
                    './components': 'components',
                    './theme': 'theme',
                },
                shared: [
                    "react",
                    "react-dom",
                    { "@material-ui/styles": { singleton: true } },
                    { "@material-ui/core": { singleton: true } },
                    { "@material-ui/icons": { singleton: true } }
                ]
            }),
        ]
    });