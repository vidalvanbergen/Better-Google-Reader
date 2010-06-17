(function() {
var css = "#viewer-footer, #viewer-details-toggle, #viewer-header, #chrome-header, .loaded #search, #guser { display: none; !important }";
var heads = document.getElementsByTagName("head");
if (heads.length > 0) {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	heads[0].appendChild(node); 
}
})();