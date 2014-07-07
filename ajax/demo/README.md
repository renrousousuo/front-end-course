ajax 示例说明
---

## 接口

### 分页获取

上行

GET `/page/:pageSize/:pageIndex`

* pageSize 每页大小
* pageIndex 页码

下行

```javascript
{
  "count": 12000, // 总共条数
  "content": [ // 新闻条目
    {
      "id": "20140704200832232721461", // 文章 ID
      "year": "2014", // 发表年份
      "title": "校长陈吉宁与2014届本科毕业生代表座谈", // 文章标题
      "visitor": 1905 // 浏览次数
    }
  ]
```

### 搜索

上行

GET `/search/:pageSize/:pageIndex?q=:key`

* key 检索关键词
* pageSize 每页大小
* pageIndex 页码

下行

```javascript
{
  "count": 12000, // 总共条数
  "content": [ // 新闻条目
    {
      "id": "20140704200832232721461", // 文章 ID
      "year": "2014", // 发表年份
      "title": "校长陈吉宁与2014届本科毕业生代表座谈", // 文章标题
      "visitor": 1905 // 浏览次数
    }
  ]
}
```

### 延迟获取

上行

GET `/wait/:newsIndex/:delay`

* newsIndex 新闻序号
* delay 延迟时间，单位毫秒

下行

```javascript
{
  "id": "20140704200832232721461", // 文章 ID
  "year": "2014", // 发表年份
  "title": "校长陈吉宁与2014届本科毕业生代表座谈", // 文章标题
  "visitor": 1905 // 浏览次数
}
```

## Demo 运行说明

* 安装 node 环境
* 打开控制台
* 设置 npm 镜像，`$npm config set registry http://registry.cnpmjs.org`
* 安装 bower 工具 `$npm -g install bower`
* 进入 demo 目录 `$cd demo`
* 安装 node 包和依赖 `$npm install`
* 安装 bower 组件和依赖 `$bower install`
* 进入 ace 目录 `$cd public/components/ace` 目录
* 安装 ace 依赖 `$npm install`
* 编译 ace `$node ./Makefile.dryice.js`