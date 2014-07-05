var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();

var filename = 'news.json';
var newsArray = [];

if (fs.existsSync(filename)) {
  newsArray = JSON.parse(fs.readFileSync(filename));
  console.log('load.');
}

app.use(express.static(__dirname + '/public'));

app.get('/wait/:newsIndex/:delay', function(req, res) {
  var delay = parseInt(req.params.delay);
  var newsIndex = parseInt(req.params.delay);
  setTimeout(function() {
    res.json(newsArray[newsIndex]);
  }, delay);
});

app.get('/page/:pageSize/:pageIndex', function(req, res) {
  var pageIndex = parseInt(req.params.pageIndex);
  var pageSize = parseInt(req.params.pageSize);
  var start = pageIndex * pageSize; // 起始点
  res.json({
    count: newsArray.length,
    news: newsArray.slice(start, start + pageSize)
  });
});

var server = http.createServer(app);
server.listen(2014);