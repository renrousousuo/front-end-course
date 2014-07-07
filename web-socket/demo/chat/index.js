var port = 2016;
var WebSocketServer = require('ws').Server;
var http = require('http')
var express = require('express')
var app = express();

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(port);
console.log('listen port: %d', port);

var guid = 0;
var users = {};
var messages = [];

var wss = new WebSocketServer({server: server});

wss.broadcast = function(data) {
  this.clients.forEach(function(client) {
    client.send(data);
  });
};

wss.on('connection', function(ws) {
  guid++;
  var user = {
    id: guid,
    name: guid
  };
  users[guid] = user;
  ws.send(JSON.stringify({
    event: 'init',
    data: {
      self: user,
      users: users,
      messages: messages
    }
  }));
  wss.broadcast(JSON.stringify({
    event: 'join',
    data: user
  }));
  console.log('client connection.');
  ws.on('close', function() {
    console.log('client close.');
    wss.broadcast(JSON.stringify({
      event: 'exit',
      data: user
    }));
    delete users[user.id];
  });
  ws.on('message', function(e) {
    var param;
    try {
      param = JSON.parse(e)
    } catch(ex) {
      return;
    }
    switch (param.event) {
      case 'rename':
        user.name = param.data.name;
        wss.broadcast(JSON.stringify({
          event: 'rename',
          data: user
        }));
        break;
      case 'talk':
        var message = {
          message: param.data.message,
          type: param.data.type,
          from: user
        };
        messages.push(message);
        wss.broadcast(JSON.stringify({
          event: 'talk',
          data: message
        }));
        break;
    }
  });
});