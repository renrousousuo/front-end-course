AJAX 技术分享
===

## AJAX 在哪里？Where

无所不在的 AJAX。

* 百度搜索框，智能补全
* 微博搜索框，智能补全
* 淘宝搜索框，智能补全
* 百度相册，图片浏览
* QQ 二维码登录

## 什么是 AJAX？What

网页中处理**异步请求**的技术。

* AJAX 即 “Asynchronous Javascript + XML”，是指一种创建**交互式网页**应用的网页开发技术。
* AJAX 是一种用于创建快速**动态网页**的技术。

### 扩展

* 什么是异步请求？不堵塞用户界面的请求。

### AJAX 工作流程

![AJAX 工作流程](http://divio.qiniudn.com/Fus2jym7jRIW_gKd5qDpoEtRry26)

## 为什么要用 AJAX？Why

异步才够快！

### 优势

* 优质的用户体验，加载快速、智能补全、即时通知等等。
* 节省带宽，内容更新不用加载整个网页，可以按需加载内容。
* 无兼容性问题，常见浏览器均支持。

## 怎么用 AJAX？How

### 需要了解的概念

* 跨域（cross-domain）
  - `image.baidu.com` 和 `www.baidu.com` 跨域吗？
  - `baidu.com` 和 `www.baidu.com` 跨域吗？

```javascript
// 实验
console.log(document.domain); // 尝试打印页面当前域
```

* JSON（JavaScript Object Notation）JS 对象符号

```javascript
// 正确的 JSON 格式
{
  "name": "孙悟空",
  "is-monkey": true,
  "age": 24
}
```

```javascript
// 错误的 JSON 格式
{
  name: "孙悟空",
  "is-monkey": function() {
    return true;
  }
}
```

* JSONP（JSON with Padding）
* JS 模板（JavaScript templates）

### 步骤

* 制订通信协议。
* 发送请求参数。
* 处理应答数据。
* 更新界面。

### 客户端代码

```javascript
void function() {
  /**
   * 处理 AJAX 数据
   */
  function processData(data) {
    // TODO : 渲染界面
  }

  /**
   * 处理 AJAX 状态变化
   */
  function handler() {
    if (this.readyState == this.DONE) {
      if (this.status == 200) {
        try {
          processData(JSON.parse(this.responseText));
        } catch(ex) {
          console.log(ex.message);
        }
      }
    }
  }

  var client = new XMLHttpRequest();
  client.onreadystatechange = handler;
  client.open('GET', 'config.json');
  client.send();

}();
```

### jQuery AJAX

## Demo

* 智能提示

## 追求卓越

* 编写易于维护的代码
* 利用缓存避免重复的请求
* 做好单元测试

## 常见相关面试题

* 请尽可能详尽的解释 AJAX 的工作原理。
* 请解释 JSONP 的工作原理，以及它为什么不是真正的 AJAX。
* 你使用过 JavaScript 模板系统吗？
* GET 和 POST 的区别？

## Demo 运行说明

```
npm install
```

## 参考资料

* [百度百科 AJAX](http://baike.baidu.com/subview/1641/5762264.htm)
* [前端工作面试问题](https://github.com/darcyclarke/Front-end-Developer-Interview-Questions/tree/master/Chinese)
* [Embedded JavaScript templates](https://github.com/visionmedia/ejs)
* [jQuery Document Category: Ajax](http://api.jquery.com/category/ajax/)
* [Zepto Ajax requests](http://zeptojs.com/#$.ajax)
* [XMLHttpRequest Level 1](http://www.w3.org/TR/XMLHttpRequest/)
* [Introducing JSON](http://json.org/)
* [express: web application framework for node](http://expressjs.com/)
* [Cross-Origin Resource Sharing](http://www.w3.org/TR/cors/)

## 扩展阅读

* [理解 RESTful 架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)  2011年9月12日 阮一峰
* [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)