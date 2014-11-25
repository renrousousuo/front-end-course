window.onload = function() {
  function format(template, json) {
    /*<debug>*/
    if (typeof template === 'function') { // 函数多行注释处理
      template = String(template).replace(
        /^[^\{]*\{\s*\/\*!?[ \f\t\v]*\n?|[ \f\t\v]*\*\/[;|\s]*\}$/g, // 替换掉函数前后部分
        ''
      );
    }
    /*</debug>*/

    return template.replace(/#\{(.*?)\}/g, function(all, key) {
      return json && (key in json) ? json[key] : "";
    });
  }

  var header = document.querySelector('header');
  header.innerHTML = format( /*#*/ function() {
    /*!
<a href="index.html">简单绘制</a>
<a href="colors.html">三颜色</a>
<a href="colors-animation.html">彩色圈动画</a>
<a href="polygon.html">正多边形</a>
<a href="thu-logo.html">旋转 logo</a>
<a href="cat.html">奔跑的猫</a>
<a href="transition.html">渐变动画</a>
<a href="slider.html">轮播图</a>
<a href="path.html">SVG 路径利用</a>
  */
  });

  var items = document.querySelectorAll('header a');
  for (var i = items.length - 1; i >= 0; i--) {
    var item = items[i];
    if (location.href.indexOf(item.href) >= 0) {
      item.classList.add('active');
      break;
    }
  }
  if (typeof ace === 'undefined') {
    return;
  }
  ace.config.set("workerPath", "components/ace/build/src");
  var highlighter = ace.require("ace/ext/static_highlight")
  var dom = ace.require("ace/lib/dom")

  function qsa(sel) {
    return Array.apply(null, document.querySelectorAll(sel));
  }

  qsa("code[class]").forEach(function(el) {
    var m = el.className.match(/language-(\w+)|(javascript)/);
    if (!m) {
      return;
    }
    var mode = "ace/mode/" + (m[1] || m[2]);
    highlighter.highlight(el, {
      mode: mode,
      theme: "ace/theme/xcode"
    });
  });
};
