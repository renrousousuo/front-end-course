## 哪里有 WebSocket？Where

* [网易游戏框架 Pomelo](http://nodejs.netease.com/)
* [百度应用框架 Clouda](http://cloudajs.org/)

## 什么是 WebSocket？What

WebSocket protocol 是HTML5 一种新的协议。它是实现了浏览器与服务器全双工通信(full-duplex)。

* HTML5 定义了 WebSocket 协议，能更好的节省服务器资源和带宽并达到实时通讯。

### 半双工 通信

![half-duplex](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/HalfDuplex.JPG/275px-HalfDuplex.JPG)

### 全双工 通信

![full-duplex](https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/FullDuplex.JPG/275px-FullDuplex.JPG)

## 为什么要用 WebSocket？Why

### 优势

* 实时性高，省去了建立连接的时间。
* 减少流量，不用每次都传输 head 和 cookie。

### 使用场景

* 即时类游戏。
* 即时消息。
* 即时协作。

## 怎么用 WebSocket？How

### 需要使用的技术

* [NodeJS](http://nodejs.org/) 脱离浏览器的 JS 运行环境
  * 运行 JS `$node .` or `$node server.js`
* [NPM](http://npmjs.org/) Node Packaged Modules
  * 安装当前依赖的 node 模块 `$npm install`
  * 安装指定 node 模块 `$npm install bower`
  * 安装全局 node 模块 `$npm install -g bower`
* [Bower](http://bower.io/)

### 常用的类库

* [ws: a node.js websocket implementation](http://einaros.github.io/ws/)
* [socket.io](http://socket.io/) 兼容浏览器的 websocket 类库

## 实战

### 聊天室实现

![加入聊天室流程](http://divio.qiniudn.com/Ftu1fc509LLw6_gsDDhG0yGxujR7)

协议

#### Client

* event: talk // 对话

```javascript
{
  message: 'hello', // 聊天内容
  type: 'text' // 内容类型
}
```

* event: rename // 重命名

```javascript
{
  name: 'zswang' // 用户名
}
```

#### Server

* event: init // 初始化

```
{
  self: {
    id: 1
  },
  users: [{
    name: 'zswang1',
    id: 1
  }],
  messages: [{
    id: 1,
    message: 'hello world.',
    type: 'text',
    "from": {
      name: 'zswang1',
      id: 1
    }
  }]
}
```

* event: join // 用户加入

```javascript
{
  id: 1,
  name: 'zswang' // 用户名
}
```

* event: talk // 对话

```javascript
{
  id: 1,
  message: 'hello', // 聊天内容
  type: 'text' // 内容类型
}
```

* event: rename // 重命名

```javascript
{
  id: 1,
  name: 'zswang' // 用户名
}
```

* event: exit // 用户退出

```javascript
{
  id: 1,
  name: 'zswang' // 用户名
}
```

## 注意事项

* 任何用户或第三方输入的数据，输出和处理的时候都需要容错

## 常见面试题

* Long-Polling(长轮询), WebSockets, SSE(Server-Sent Event) 之间有什么区别？

## 参考文档

* [The WebSocket API](http://www.w3.org/TR/websockets/)
* [百度百科 WebSocket](http://baike.baidu.com/view/3623887.htm)
* [Duplex (telecommunications)](https://en.wikipedia.org/wiki/Full_duplex)
* [Server-Sent Events](http://www.w3.org/TR/eventsource/)
* [The WebSocket Protocol](http://tools.ietf.org/html/rfc6455)
* [Specifics of npm's package.json handling](https://www.npmjs.org/doc/files/package.json.html)

## 工具和类库

* [ws: a node.js websocket implementation](http://einaros.github.io/ws/)
* [socket.io](http://socket.io/) 兼容浏览器的 websocket 类库
* [Bower: A package manager for the web](http://bower.io/)

## 扩展阅读

* [知乎：WebSocket 是什么原理？为什么可以实现持久连接](http://www.zhihu.com/question/20215561)
* [Server-Sent Events with Node.js (Express)](http://tomkersten.com/articles/server-sent-events-with-node/)
* [关于 WebSocket](http://www.cnblogs.com/yjf512/archive/2013/03/11/2953483.html) 2013年03月11 叶剑峰
* [What are WebSockets?](http://pusher.com/websockets)
* [Introducing WebSockets: Bringing Sockets to the Web](http://www.html5rocks.com/en/tutorials/websockets/basics/)[译文](http://www.html5rocks.com/zh/tutorials/websockets/basics/)