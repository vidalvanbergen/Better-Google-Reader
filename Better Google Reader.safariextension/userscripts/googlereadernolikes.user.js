addStyle(
  " .entry-likers, .like { display: none !important; }"
);

function addStyle(css) {
  var s = document.createElement('style');
  s.appendChild(document.createTextNode(css));
  document.getElementsByTagName('head')[0].appendChild(s);
}
