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
app.get('/wait', function(req, res){
  setTimeout(function() {
    res.json({
      city: 'beijing',
      temperature: '31 ~ 23℃'
    });
  }, 5000);
});

var server = http.createServer(app);
server.listen(2014);