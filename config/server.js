const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function (env) {
  return  {
    name: 'server',
    target: 'node',
    entry: ['whatwg-fetch', './server-src/index.js'],
    output: {
      path: path.join(__dirname, '../server-app'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader'
            ],
            // By default, ETP infers from primary publicPath above
            // But that leads to public/public
            publicPath: '',
          })
        },
      ]
    },
    plugins: [
      new ExtractTextPlugin("../public/css/styles.css"),
    ],
  }
}
