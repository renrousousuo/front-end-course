window.onload = function() {
  var items = document.querySelectorAll('header a');
  for (var i = items.length - 1; i >= 0; i--) {
    var item = items[i];
    if (location.href.indexOf(item.href) >= 0) {
      item.classList.add('active');
      break;
    }
  }
}