// ==UserScript==
// @name           Google Reader for wider screens
// @namespace      http://wtw.tw/scripts/
// @description    Changes the maximum width of Google Reader items, for better viewing on wider screens with higher resolutions.
// @include        *.google.*
// ==/UserScript==

function setRuleStyle(sClassName, sRule) {
  var sheets = document.styleSheets;
  var rules;
  var styleObj;
  for (i = 0; i < sheets.length; i++) {
    rules = sheets[i].cssRules || sheets[i].rules;
    for (var j = 0; j < rules.length; j++) {
      if (rules[j].selectorText && rules[j].selectorText.indexOf(sClassName) != -1) {
        styleObj = rules[j].style.cssText = sRule;
        break;
      }
    }
  }
}

setRuleStyle(".entry .entry-body, .entry .entry-title", "max-width: 100%;"); 