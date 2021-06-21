module.exports = ({ devServerPort }) => ({
    mode: "development",
    devServer: {
        port: devServerPort,
        host: 'localhost',
        historyApiFallback: true,
        hot: true,
        open: true,
        proxy: {}
    },
    devtool: "inline-source-map",
})