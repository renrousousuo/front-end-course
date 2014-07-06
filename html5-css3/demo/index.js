var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();

var newsArray = [];
app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(2015);