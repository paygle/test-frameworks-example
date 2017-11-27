var path = require('path')
var config = require('../../config')
var utils = require('../../build/utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('../../build/webpack.base.conf')

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  devtool: '#inline-source-map',
  vue: {
    loaders: utils.cssLoaders({ sourceMap: config.dev.cssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
  ]
})

// shared config for all unit tests
module.exports = {
  frameworks: ['mocha', 'sinon-chai'],
  files: [
    './index.js'
  ],
  preprocessors: {
    './index.js': ['webpack', 'sourcemap']
  },
  webpack: webpackConfig,
  webpackMiddleware: {
    noInfo: true
  },
  plugins: [
    'karma-coverage',
    'karma-mocha',
    'karma-mocha-reporter',
    'karma-sinon-chai',
    'karma-sourcemap-loader',
    'karma-webpack'
  ]
}
