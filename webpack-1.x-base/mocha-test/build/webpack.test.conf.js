var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var customConfig = {
    entry: {},
    plugins: []
}
// 添加入口
utils.entry.forEach(function(item){
    customConfig.entry[item] = 'src/modules/' + item + '/' + item + '.js'
    //添加模块
    customConfig.plugins.push(new HtmlWebpackPlugin({
        filename: item + '.html',
        template: 'src/modules/'+ item +'/' + item + '.html',
        inject: 'body',
        chunks: [item]
    }))
})

// add hot-reload related code to entry chunks
Object.keys(customConfig.entry).forEach(function (name) {
    customConfig.entry[name] = ['./build/dev-client'].concat(customConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env,
            'API_URL': config.dev.env.API_URL
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // 添加公共JS
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: utils.assetsPath('js/common.js'),
            chunks: utils.entry
        })
    ]
}, customConfig)

