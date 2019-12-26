const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].chunkhash.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),//清除dist文件夹
        new HtmlWebpackPlugin({ // 打包输出HTML
            title: 'myapp',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            // filename: 'index.html',
            // template: 'index.html'
        }),
    ],
    module: {
        rules: [
            // 只映入使用到的模块
            {
                include: path.resolve("src", "lodash"),
                sideEffects: false
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}