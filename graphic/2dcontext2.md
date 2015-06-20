HTML Canvas 2D Context，Level 2 尝鲜
---

### 画布高宽不用通过 canvas 获得了。

标准文档：

```idl
// canvas dimensions
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

### Content 不再需要依赖特定的 Canvas 存在

看来后续图像处理可以放到线程中

标准文档：

```idl
// for contexts that aren't directly fixed to a specific canvas
void commit(); // push the image to the output bitmap
```

### 获取当前坐标系

```idl
// transformations (default transform is the identity matrix)
attribute SVGMatrix currentTransform;
```

### 
