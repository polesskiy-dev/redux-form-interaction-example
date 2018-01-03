const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Create multiple instances
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');

const sourcePath = path.join(__dirname, '/src/');
const buildPath = path.join(__dirname, '/dist/');

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: path.resolve(sourcePath, 'index.js')
  },
  output: {
    path: path.resolve(buildPath),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: extractCSS.extract(['css-loader', 'postcss-loader'])
      },
      {
        test: /\.less$/i,
        use: extractLESS.extract(['css-loader?sourceMap', 'less-loader?sourceMap'])
      },
    ],

  },
  plugins: [
    extractCSS,
    extractLESS
  ],
  devServer: {
    contentBase: path.resolve(buildPath),
    host: 'localhost',
    port: 3000,
  },
};
