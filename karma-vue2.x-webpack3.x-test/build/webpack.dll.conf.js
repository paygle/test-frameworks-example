const path = require('path')
const webpack = require('webpack');

module.exports = {
  name: "vendor",
  entry: {
    'dllVue': ['vue'],
    'dllVuex': ['vuex'],
    'dllVueRouter': ['vue-router'],
    'dllElement': ['element-ui']
  },
  output: {
    filename: '[name].library.js',
    path: path.resolve(__dirname, '../static/js'),
    libraryTarget: 'umd',
    library: '[name]' // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  plugins: [
    new webpack.DllPlugin({
      // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      path: path.resolve(__dirname, `../static/[name].manifest.json`),
      context: path.join(__dirname, "../static/js"),
      name: '[name]',
    })
  ]
}
