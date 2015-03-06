JS 常用文件处理的项目
===

## 文件类型

### 获取文件类型

https://github.com/sindresorhus/file-type

+ 示例

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var fileType = require('file-type');
var buffer = readChunk.sync('unicorn.png', 0, 262);

fileType(buffer);
//=> {ext: 'png', mime: 'image/png'}
```

## GIF

### GIF 生成

https://github.com/jnordberg/gif.js

+ 示例

```js
var gif = new GIF({
  workers: 2,
  quality: 10
});

// add an image element
gif.addFrame(imageElement);

// or a canvas element
gif.addFrame(canvasElement, {delay: 200});

// or copy the pixels from a canvas context
gif.addFrame(ctx, {copy: true});

gif.on('finished', function(blob) {
  window.open(URL.createObjectURL(blob));
});

gif.render();
```

### GIF 解析和播放

https://github.com/shachaf/jsgif

## EXCEL

### EXCEL 生成

https://github.com/guyonroche/exceljs

+ 示例

```js
// Interface
var Excel = require("exceljs");

// Create a Workbook
var workbook = new Excel.Workbook();

// Set Workbook Properties
workbook.creator = "Me";
workbook.lastModifiedBy = "Her";
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date();

// Add a Worksheet
var sheet = workbook.addWorksheet("My Sheet");
```

## PDF

### PDF 生成

https://github.com/MrRio/jsPDF

+ 示例

```js
var doc = new jsPDF();
doc.text(20, 20, 'Hello world.');
doc.save('Test.pdf');
```

## PSD

### PSD 读取

https://github.com/meltingice/psd.js

+ 示例

```js
var PSD = require('psd');
var psd = PSD.fromFile("path/to/file.psd");
psd.parse();

console.log(psd.tree().export());
console.log(psd.tree().childrenAtPath('A/B/C')[0].export());

// You can also use promises syntax for opening and parsing
PSD.open("path/to/file.psd").then(function (psd) {
  return psd.image.saveAsPng('./output.png');
}).then(function () {
  console.log("Finished!");
});
```
