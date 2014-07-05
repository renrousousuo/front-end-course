/**
 * 修复浏览数
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
  return item.visitor === null;
});

var patchIndex = 0;

/**
 * 修复数据
 */
function patch() {
  var news = patchArray[patchIndex++];
  if (!news) { // 没得爬了
    fs.writeFile(filename, JSON.stringify(newsArray), function (err) {
      if (!err) {
        console.log('completed.');
      }
    });
    return;
  }

  var url = util.format(
    'http://news.tsinghua.edu.cn/application/visitor/article_list_visitors_2.jsp?articleID=%s',
    news.id
  );

  if (patchIndex % 10 == 0) {
    console.log(util.format('%d / %d', patchIndex, patchArray.length));
  }
  http.get(url, function(res) {
    var body = '';
    res.on('data', function(trunk) {
      body += trunk;
    }).on('end', function() {
      news.visitor = parseInt(body);
      patch();
    });
  }).on('error', function(e) {
    fs.writeFile(filename, JSON.stringify(newsArray), function (err) {
      if (!err) {
        console.log('save.');
      }
    });
    console.error(e);
  });
}

patch();