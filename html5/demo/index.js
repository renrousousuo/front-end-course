var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();

var newsArray = [];
app.use(express.static(__dirname + '/public'));

var port = 2015;
var server = http.createServer(app);
server.listen(port);
console.log("listen port: %d", port);