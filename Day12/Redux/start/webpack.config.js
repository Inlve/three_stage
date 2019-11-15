const path = require("path");
const MiniCssExtract = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }, {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtract.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    }, {
                        loader: 'css-loader',
                    }, {
                        loader: 'sass-loader',
                    }
                ]
            }, {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.sass',
            '.scss',
            '.css'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    plugins: [
        new MiniCssExtract({
            filename: '[name].min.css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        hotOnly: true,
        port: 80,
        publicPath: 'http://localhost/dist/'
    },
    devtool: 'source-map',

}
