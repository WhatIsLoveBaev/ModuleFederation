const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// optimization: { // выносит код сторонней библиотеки из component.js билда, в отдельный файл vendor-name.js, что бы если в n местах используемая библиотека, не добавлялась в каждый файл использования, а вынеслась в один и спользовалась где нужно
// extensions: [".tsx", ".ts", ".jsx", ".js"], какие расширение понимать вебпаку по умолчанию, все что указано в этом поле, не нужно будет указывать расширение при импорте ( import Comp || import Comp.js/tsx )
// alias: {  для импортов
// url-loader ???

// const isDev = process.env.NODE_ENV === 'development';
// const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve("dist"),
        filename: '[name].js',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-typescript", "@babel/preset-env",],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-typescript",
                            "@babel/preset-react",
                            "@babel/preset-env",
                        ],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    }
                }
            },
            {
                test: /\.js?$|\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-env",
                        ],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        alias: {
            '@host': path.resolve(__dirname, 'src/modules/host')
        }
    },
}