addStyle(
  " .entry-body { max-width: 100% !important; }"
);

function addStyle(css) {
  var s = document.createElement('style');
  s.appendChild(document.createTextNode(css));
  document.getElementsByTagName('head')[0].appendChild(s);
}
