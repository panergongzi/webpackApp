const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        port: 8088,
        contentBase: path.resolve(__dirname, 'dist/'),
        historyApiFallback: true,
        hot: true
    },
    mode: "development",
    plugins: [
        new webpack.NamedModulesPlugin(),//热加载时直接返回更新文件名
        new webpack.HotModuleReplacementPlugin(),//热加载
    ],
});