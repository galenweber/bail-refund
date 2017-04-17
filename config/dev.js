const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
  return {
    // The configuration for the client
    name: 'browser',
    devtool: 'cheap-eval-source-map',
    devServer: {
      historyApiFallback: {
        index: 'dev-server/index.html',
      }
    },
    entry: ['whatwg-fetch', './src/components/entry.js'],
    output: {
      path: path.join(__dirname, '../public'),
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
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
      ]
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.BROWSER': true,}),
        new webpack.DefinePlugin({'process.env.WEBPACK_DEV': true,})
    ],
  }
}

