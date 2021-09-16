const path = require('path');
const { merge: webpackMerge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ModuleFederationWebpackPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const webpackModuleConfig = require('../../config/webpack/webpack.module.config');

module.exports = webpackMerge(webpackModuleConfig({ devServerPort: 3000 }),
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
                name: 'host',
                filename: 'remoteEntry.js',
                remotes: {
                    "@common": "common@http://localhost:3001/remoteEntry.js",
                },
                shared: [
                    "react",
                    "react-dom",
                    { "@material-ui/styles": { singleton: true } },
                    { "@material-ui/core": { singleton: true } },
                    { "@material-ui/icons": { singleton: true } }
                ]
            }),
            new HTMLWebpackPlugin({
                template: path.join(__dirname, 'public', 'index.html'),
                publicPath: '/',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.join(__dirname, './favicon.ico'), to: path.join(__dirname, 'dist') }
                ]
            }),
        ]
    });