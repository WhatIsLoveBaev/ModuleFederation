const path = require('path');
const { merge: webpackMerge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const ModuleFederationWebpackPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const webpackModuleConfig = require('../../config/webpack/webpack.module.config');

module.exports = webpackMerge(webpackModuleConfig({ devServerPort: 3000 }),
    {
        plugins: [
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