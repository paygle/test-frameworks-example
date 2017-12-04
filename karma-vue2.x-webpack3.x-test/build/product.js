var n = require('os').networkInterfaces()
var express = require('express')
var opn = require('opn')
var path = require('path')
const host = 'http://' + require('../config/gethost').ip
var port = 6788
var app = express()
app.use(express.static(path.join(__dirname, '../dist')));

var server = app.listen(port, function() {
  console.log(`server listening at ${host}:%s`, port);
  opn(`${host}:`+ port);
});
