var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/theme/main.less',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: true
    })
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
      },
    ]
  },
  devServer: {
    contentBase: "./src"
  }
};
