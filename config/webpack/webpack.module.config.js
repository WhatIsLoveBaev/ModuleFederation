const { merge: webpackMerge } = require("webpack-merge");

const webpackBaseConfig = require('./webpack.base.config');
const webpackDevServer = require('./webpack.dev.config');

module.exports = ({ devServerPort }) => webpackMerge([
    webpackBaseConfig,
    webpackDevServer({ devServerPort }),
])