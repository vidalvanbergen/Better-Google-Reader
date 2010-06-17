(function() {
var css = "#viewer-footer, #viewer-details-toggle, #viewer-header, #chrome-header, .loaded #search, #guser, #gbar, .gbh, #logo-container { display: none; !important } #main { top: 0px !important; } #chrome { margin-top: 0px !important; }";
var heads = document.getElementsByTagName("head");
if (heads.length > 0) {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	heads[0].appendChild(node); 
}
})();

// Hide unwanted elements with {Dislay: none}.
// Set the main view's top to 0 to stretch across the screen.
// Set Chrome's margin-top override for Helvetireader support, and possibly others.