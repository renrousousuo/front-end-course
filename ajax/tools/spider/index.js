var util = require('util');
var http = require('http');
var fs = require('fs');

var min = 1;
var max = 2;
var filename = 'news.json';
//var max = 335;
//var max = 3; // debug
var urls = [];

for (var i = min; i <= max; i++) {
  var url = util.format(
    'http://news.tsinghua.edu.cn/publish/news/4205/index%s.html',
    i === min ? '' : '_' + i
  );
  urls.push(url);
}

var crawlIndex = 0; // 序号
var visitorIndex = 0; // 浏览量序号
var newsArray = []; // 文章列表

/**
 * 爬数据
 */
function crawl() {
  if (fs.existsSync(filename)) {
    newsArray = JSON.parse(fs.readFileSync(filename));
    console.log('load.');
    console.log('get visitor ...');
    getVisitor(); // 计算浏览量
    return;
  }

  var url = urls[crawlIndex++];
  if (!url) { // 没得爬了
    fs.writeFile(filename, JSON.stringify(newsArray), function (err) {
      if (!err) {
        console.log('save.');
      }
    });
    console.log('get visitor ...');
    getVisitor(); // 计算浏览量
    return;
  }

  console.log(util.format('get "%s" ...', url));
  http.get(url, function(res) {
    var buffer = new BufferHelper();
    res.on('data', function(trunk) {
      buffer.concat(trunk);
    }).on('end', function() {
      String(buffer).replace(
        /<li><a href='\/publish\/news\/(\d+)\/(\d+)\/(\d+)\/([^']+)'><font color="">\s*(.*?)\s*<\/font><\/a>/g,
        function (all, group, year, id, filename, title) {
          newsArray.push({
            year: year,
            id: id,
            title: title
          });
        }
      );
      console.log(util.format('newsArray.length => %d', newsArray.length));
      crawl();
    });
  }).on('error', function(e) {
    console.error(e);
  });
}

/**
 * 爬浏览量
 */
function getVisitor() {
  var news = newsArray[visitorIndex++];
  if (!news) { // 没得爬了
    fs.writeFile(filename, JSON.stringify(newsArray), function (err) {
      if (!err) {
        console.log('completed.');
      }
    });
    return;
  }
  if (typeof news.visitor !== 'undefined') {
    getVisitor();
    return;
  }
  var url = util.format(
    'http://news.tsinghua.edu.cn/application/visitor/article_list_visitors_2.jsp?articleID=%s',
    news.id
  );

  if (visitorIndex % 100 == 0) {
    console.log(util.format('%d / %d', visitorIndex, newsArray.length));
  }
  http.get(url, function(res) {
    var body = '';
    res.on('data', function(trunk) {
      body += trunk;
    }).on('end', function() {
      news.visitor = parseInt(body);
      getVisitor();
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
console.log("Let's go.");

crawl(); // 开始怕吧。。。