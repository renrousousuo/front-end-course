HTML5 / CSS3 技术分享
---

## HTML5、CSS3 的普及情况

![普及情况](http://divio.qiniudn.com/FrQ0dtCwjxot1EzwItwbH7yQHr-F)

* 现在普及率高于 70%。
* 两年后高于 85%。

学习了解 HTML5、CSS3 很有必要。

## HTML5 有什么改变？

更符合开发者使用习惯

### 语法 Syntax

语法更简单

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Example document</title>
  </head>
  <body>
    <p>Example paragraph</p>
  </body>
</html>
```

过去

```html
<meta http-equiv="content-type" content="text/html;charset=utf-8">
```
### 语言 Language

新增语义化的元素

 * `<header>`
 * `<footer>`

新增属性

* `<a download="1.pdf" href="books/1">下载</a>`
* `<input type="date" />`
* `<input type="email" />`

### 内容模式 Content Mode

改变了一些容器规则

### APIs

新增多媒体

* `<video>` 视频
* `<audio>` 音频

新增图像处理

* `<canvas>` 画布
* `<svg>` 矢量图

## CSS3 有什么改变？

### 新增动画和渐变效果

* 渐变动画 transition
* 逐帧动画 frame

### 文字和字体

* 全大写、小写显示
* 自定义字体。字体图标

### 多背景

* 圆角、纹路

### 选择器增强

```css
div:empty {
  background-color: green;
}
```

## HTML5 应用

### localStorage

保存用户使用习惯

```javascript
localStorage.username = 'zswang';
```

### 画布

绘制直线

```javascript
var x = 100, y = 100;
context.moveTo(0, 0);
context.lineTo(x, y);
context.stroke();
```

## CSS transition 应用

背景色和宽度渐变

```css
.item {
  transition: background-color 0.5s, width 0.5s; /* 过渡动画 */
  background-color: #c00;
  width: 200px;
}
```

## 参考文档

* [Differences from HTML4](http://www.w3.org/TR/html5-diff/)
* [Web Storage](http://www.w3.org/TR/webstorage/)
* [CSS Transitions](http://www.w3.org/TR/css3-transitions/)
* [CSS Animations](http://www.w3.org/TR/css3-animations/)
* [CSS Conditional Rules Module Level 3](http://www.w3.org/TR/css3-conditional/)
* [Selectors Level 3](http://www.w3.org/TR/selectors/)
* [CSS Text Module Level 3](http://www.w3.org/TR/css3-text/)
* [CSS Backgrounds and Borders Module Level 3](http://www.w3.org/TR/css3-background/)
* [CSS Color Module Level 3](http://www.w3.org/TR/css3-color/)
* [CSS Fonts Module Level 3](http://www.w3.org/TR/css3-fonts/)

## 工具和扩展阅读

* [Fontello - icon fonts generator](http://fontello.com/)