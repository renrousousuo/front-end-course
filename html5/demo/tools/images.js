var fs = require('fs');
fs.readdir('../public/img/here/', function (err, files) {
  var images = files.filter(function (item) {
    return /\.jpg$/.test(item);
  }).map(function (item) {
    return 'img/here/' + item;
  });
  console.log(images);
});