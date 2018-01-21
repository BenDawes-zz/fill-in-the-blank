var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        javascript: './src/index.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                loader: "file-loader?name=[name].[ext]",
            },{
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
        ]
    },
    devServer: {
        contentBase: "./src",
        hot: true
    }
};
module.exports = config;
