var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {},
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', 'css', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    // 添加目录解析
    alias: {
      'vue$': 'vue/dist/vue',
      'config': path.resolve(__dirname, '../config'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'packages': path.resolve(__dirname, '../packages'),
      'test': path.resolve(__dirname, '../test'),
	    'src': path.resolve(__dirname, '../src'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'utils': path.resolve(__dirname, '../src/utils')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
