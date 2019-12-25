const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    app: './src/index.js',
    // print: './src/print.js' 
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
 
  //压缩代码
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),//热加载
    // new UglifyJSPlugin({
    //   sourceMap: true
    // })
  ],
  devServer: {
    port: 8088,
    contentBase: path.resolve(__dirname, 'dist/'),
    historyApiFallback: true,
    hot: true
  },
  mode: "production",
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
