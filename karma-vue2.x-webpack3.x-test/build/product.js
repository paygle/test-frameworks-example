var express = require('express');
var opn = require('opn');
var path = require('path');
var host = 'http://' + require('../config/gethost').ip;
var port = 6788;
var app = express();
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, function() {
  console.log(`server listening at ${host}:%s`, port);
  opn(`${host}:`+ port);
});
