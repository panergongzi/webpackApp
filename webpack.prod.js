 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   plugins: [
    // new UglifyJSPlugin()
   ],
   mode: "production",
  //  压缩代码
   optimization: {
    minimize: true
  },
 });