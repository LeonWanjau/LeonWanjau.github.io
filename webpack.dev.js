const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack=require('webpack')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'Personal Site Dev',
            filename:'index.html',
            template:'src/App/index.template.html'
        }),
        new webpack.DefinePlugin({
            EMAIL_API:JSON.stringify('https://leon-5.azurewebsites.net/api/sendemail')
        })
    ]
});