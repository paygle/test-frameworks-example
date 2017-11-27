var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.dev.conf.js");

config.entry.index.unshift('webpack/hot/dev-server');
config.entry.index.unshift('webpack-dev-server/client?http://localhost:3000');

var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: "localhost",
    port: "3000",
});
server.listen(3000);