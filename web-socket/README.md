## 哪里有 WebSocket？Where

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

* NodeJS

## 参考文档

* [The WebSocket API](http://www.w3.org/TR/websockets/)
* [百度百科 WebSocket](http://baike.baidu.com/view/3623887.htm)
* [Duplex (telecommunications)](https://en.wikipedia.org/wiki/Full_duplex)

## 工具和类库

* [ws: a node.js websocket implementation](http://einaros.github.io/ws/)
* [socket.io](http://socket.io/) 兼容浏览器的 websocket 类库