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

  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,

  // base path, that will be used to resolve files and exclude
  basePath: '..',

  // web server port
  port: 6677,

  frameworks: ['mocha', 'sinon-chai'],

  // list of files / patterns to load in the browser
  files: [
    'src/**/*.js',
    'test/**/*.js'
  ],

  preprocessors: {
    'src/**/*.js': ['webpack', 'sourcemap'],
    'test/**/*.js': ['webpack', 'sourcemap']
  },

  // list of files / patterns to exclude
  exclude: [
  ],

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
