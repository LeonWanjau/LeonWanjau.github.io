const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'none',
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'Personal Site Dev',
            filename:'index.html',
            template:'src/App/index.template.html'
        })
    ],
    optimization:{
        usedExports:true
    }
});