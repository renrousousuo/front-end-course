window.onload = function() {
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