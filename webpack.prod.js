const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
    entry: {
        main: './src/App/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        //chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Personal Site Dev',
            filename: 'index.html',
            template: 'src/App/index.template.html'
        })
    ],

    optimization:{
        splitChunks:{
            chunks:'all',
            //minSize:0,
        }
    },

    /*
    devServer: {
        //contentBase: __dirname,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    */
});