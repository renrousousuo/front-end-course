HTML Canvas 2D Context，Level 2 尝鲜
---

### 画布高宽不用通过 canvas 获得了。

参考：

```idl
attribute unsigned long width;
attribute unsigned long height;
```

Level 1

[示例](http://jsbin.com/nimemo/5/edit?js,console)

```js
context.moveTo(0, 0)
context.lineTo(context.canvas.width, context.canvas.height);
context.moveTo(context.canvas.width, 0)
context.lineTo(0, context.canvas.height);
context.stroke();
```

Level 2

Chrome 还未添加

```js
context.moveTo(0, 0)
context.lineTo(context.width, context.height);
context.moveTo(context.width, 0)
context.lineTo(0, context.height);
context.stroke();
```

### 画布高宽不用通过 canvas 获得了。
