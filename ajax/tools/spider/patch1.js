/**
 * 修复乱码
 */

var util = require('util');
var http = require('http');
var fs = require('fs');
var filename = 'news.json';
var newsArray = []; // 文章列表
var patchArray = [];

if (fs.existsSync(filename)) {
  newsArray = JSON.parse(fs.readFileSync(filename));
  console.log('load.');
}

var patchArray = newsArray.filter(function(item) {
  return /[\ufff0-\uffff]/.test(item.title);
});

var patchIndex = 0;

/**
 * 修复数据
 */
function patch() {
  var news = patchArray[patchIndex++];
  if (!news) { // 没得爬了
    fs.writeFile('news.json', JSON.stringify(newsArray), function (err) {
      if (!err) {
        console.log('save.');
      }
    });
    return;
  }
  var url = util.format(
    'http://news.tsinghua.edu.cn/publish/news/4205/%s/%s/%s_.html',
    news.year,
    news.id,
    news.id
  );
  console.log(util.format('get "%s" ...', url));
  var find; // 已经处理
  http.get(url, function(res) {
    res.on('data', function(trunk) {
      if (find) {
        return;
      }
      String(trunk).replace(
        /<title>\s*([\s\S]*?)\s*- 清华大学新闻网<\/title>/g,
        function (all, title) {
          find = true;
          news.title = title;
        }
      );
    }).on('end', function() {
      patch();
    });
  }).on('error', function(e) {
    console.error(e);
  });
}

patch();