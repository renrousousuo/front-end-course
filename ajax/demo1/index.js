var http = require('http')
var express = require('express')
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/weather', function(req, res){
  res.json({
    city: 'beijing',
    temperature: '31 ~ 23℃'
  });
});

var server = http.createServer(app);
server.listen(2014);