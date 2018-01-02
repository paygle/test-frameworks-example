const path = require('path')
const utils = require('./utils')
const config = require('../config')
const webpack = require('webpack')
const WebpackMd5Hash = require('webpack-md5-hash')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const vueLoaderConfig = require('./vue-loader.conf')
const scripts = process.env.NODE_ENV === 'production' ?
[
  'static/css/element.css',
  'static/css/ztree/default/zTreeStyle.css',
  'static/js/jq/jquery.min.js',
  'static/js/jq/jquery.ztree.all.min.js',
  'static/js/jq/jquery.ztree.exhide.min.js',
  'static/js/vue/vue.min.js',
  'static/js/vue/vuex.min.js',
  'static/js/vue/vue-router.min.js',
  'static/js/vue/element.js',
  'static/js/echarts/echarts.min.js',
  'static/js/echarts/echarts-amap.min.js',
  'static/js/xlsx/xlsx.min.js',
  'static/js/pako/pako.min.js'
]:[
  'static/css/element.css',
  'static/css/ztree/default/zTreeStyle.css',
  'static/js/jq/jquery.js',
  'static/js/jq/jquery.ztree.all.js',
  'static/js/jq/jquery.ztree.exhide.js',
  'static/js/vue/vue.js',
  'static/js/vue/vuex.js',
  'static/js/vue/vue-router.js',
  'static/js/vue/element.js',
  'static/js/echarts/echarts.js',
  'static/js/echarts/echarts-amap.min.js',
  'static/js/xlsx/xlsx.js',
  'static/js/pako/pako.js'
];

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var baseConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {},
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src/components'),
      'src': resolve('src'),
      'pages': resolve('src/pages')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint? [{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: !config.dev.showEslintErrorsInOverlay
        }
      }] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // 外部引入文件
  externals: {
    'jquery': 'jQuery',
    'vue': 'Vue',
    'vuex': 'Vuex',
    'vue-router': 'VueRouter',
    'element-ui': 'ELEMENT',
    'echarts': 'echarts',
    'xlsx': 'XLSX',
    'pako': 'pako'
  },
  plugins: [
    new WebpackMd5Hash(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'Vue': 'vue',
      'Vuex': 'vuex',
      'VueRouter': 'vue-router',
      'ELEMENT': 'element-ui',
      'echarts': 'echarts',
      'XLSX': 'xlsx',
      'pako': 'pako'
    }),
    // 追加第三方库文件
    new HtmlWebpackIncludeAssetsPlugin({ assets: scripts, append: false })
  ]
}

module.exports = baseConfig;
