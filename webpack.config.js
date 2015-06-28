var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'babel/polyfill',
    './src/theme/main.less',
    './src/main'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel-loader' },
      { test: /\.less$/, loader: "style!css!autoprefixer!less" }
    ]
  },
  devServer: {
    contentBase: "./src"
  }
};