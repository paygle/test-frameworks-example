var path = require('path')
var config = require('../../config')
var utils = require('../../build/utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WriteFilePlugin = require("write-file-webpack-plugin")
var baseWebpackConfig = require('../../build/webpack.base.conf')
var env = process.env.NODE_ENV === 'production';
debugger;

// 循环列表
// utils.entry.forEach(function(item){
//   baseWebpackConfig.entry[item] = 'src/pages/' + item + '/main.js';
//   if(!baseWebpackConfig.plugins){ baseWebpackConfig.plugins = []; }
//   baseWebpackConfig.plugins.push(new HtmlWebpackPlugin({
//       filename: item + '.html',
//       template: 'src/pages/'+ item + '/main.html',
//       chunks:['vendor', item],   //介入JS
//       inject: true,
//       minify: {
//         removeComments: true,
//         collapseWhitespace: true,
//         removeAttributeQuotes: true
//         // more options:
//         // https://github.com/kangax/html-minifier#options-quick-reference
//       },
//       // necessary to consistently work with multiple chunks via CommonsChunkPlugin
//       chunksSortMode: 'dependency'
//   }));
// })

var webpackConfig = merge(baseWebpackConfig, {
  entry: "src/pages/index/main.js",
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  // output: {
  //   path: config.build.assetsRoot,
  //   filename: utils.assetsPath('js/[name].[chunkhash].js'),
  //   chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  // },
  output: {
      filename: "index.js",
      path: utils.assetsPath('js/[name].js')
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // new WriteFilePlugin(),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env,
      'API_URL':env.API_URL
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   comments:false,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('css/[name].css')),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'test/unit/index.html',
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //     // more options:
    //     // https://github.com/kangax/html-minifier#options-quick-reference
    //   },
    //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    //   chunksSortMode: 'dependency'
    // }),
    // split vendor js into its own file
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module, count) {
    //     // any required modules inside node_modules are extracted to vendor
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         path.join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   chunks: ['vendor']
    // })
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
    '../test/unit/specs/**/*.js'
  ],

  preprocessors: {
    '../test/unit/specs/**/*.js': ['webpack', 'sourcemap']
  },

  // list of files / patterns to exclude
  exclude: [
  ],

  webpack: webpackConfig,
  webpackMiddleware: {
    stats: 'errors-only',
    noInfo: true
  },
  plugins: [
    'karma-coverage',
    'karma-mocha',
    'karma-sinon-chai',
    'karma-sourcemap-loader',
    'karma-webpack'
  ]
}
