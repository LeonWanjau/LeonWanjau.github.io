const path = require('path')

module.exports = {
    entry: {
        main: './src/App/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(ttf|svg|data|typeface)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets'
                    }
                }
            },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, modules: true },
                    },
                    'sass-loader'
                ]
            }
        ],
    },

    resolve: {
        alias: {
            SharedComponents: path.resolve(__dirname,'src/App/Components/'),
            Assets: path.resolve(__dirname, 'assets/'),
            Components:path.resolve(__dirname,'src/'),
            Utilities:path.resolve(__dirname,'src/App/Utilities'),
        }
    },

    optimization:{
        splitChunks:{
            chunks:'all',
            //minSize:0,
        }
    }
}