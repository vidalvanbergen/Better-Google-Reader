/*
//
// By Vidal van Bergen.
//
// Available Scripts:
//     > Colorful Listview
//         Show different colors for different feeds
//     > Unread Count
//         Show true unread count instead of "1000+"
//     > Collapse/Expand item
//         Show a "Collapse/Expand" button next to the "Previous item" / "Next item" buttons.
*/

// Get Colorful List view setting
function GetColorfulListviewFromSettings() {
	safari.self.tab.dispatchMessage("GetColorfulListviewFromSettings");
};

// Get Unread Count setting
function GetUnreadCountFromSettings() {
	safari.self.tab.dispatchMessage("GetUnreadCountFromSettings");
};

// Get Collapse/Expand Button setting
function GetExpandButtonFromSettings() {
	safari.self.tab.dispatchMessage("GetExpandButtonFromSettings");
};

// Get Wide Screen setting
function GetWideScreenFromSettings() {
	safari.self.tab.dispatchMessage("GetWideScreenFromSettings");
};

// Handle the message
function messageHandler(theMessageEvent) {


	// Load Unread Count userscript
	if (theMessageEvent.name === "GetUnreadCountFromSettingsDone") {

	// Save the message into a variable
	unreadCount = theMessageEvent.message;

		// If unreadCount setting returns true, inject user script
		if(unreadCount){
			var jsNode = document.createElement('script');
			jsNode.type = 'text/javascript';
			jsNode.src = safari.extension.baseURI + "googlereaderunreadcount.user.js";

			// Wait until document is ready
			if (document.addEventListener) {
			  document.addEventListener("DOMContentLoaded", insertNode(jsNode), false);
			};
      	}

	} // @END Unread Count
	// Load Colorful List View userscript
	if (theMessageEvent.name === "GetColorfulListviewFromSettingsDone") {
	// Save the message into a variable
	colorfulListView = theMessageEvent.message;
		// If colorfulListView setting returns true, inject user script
		if(colorfulListView){
			var jsNode = document.createElement('script');
			jsNode.type = 'text/javascript';
			jsNode.src = safari.extension.baseURI + "googlereadercolorfullistview.user.js";

			// Wait until document is ready
			if (document.addEventListener) {
			  document.addEventListener("DOMContentLoaded", insertNode(jsNode), false);
			};
      	}

	} // @END Colorful List View


	// Load Expand/Collapse button userscript
	if (theMessageEvent.name === "GetExpandButtonFromSettingsDone") {

	// Save the message into a variable
	expandButton = theMessageEvent.message;
		// If unreadCount setting returns true, inject user script
		if(expandButton){
			var jsNode = document.createElement('script');
			jsNode.type = 'text/javascript';
			jsNode.src = safari.extension.baseURI + "googlereadercollapseexpandbutton.user.js";

			// Wait until document is ready
			if (document.addEventListener) {
			  document.addEventListener("DOMContentLoaded", insertNode(jsNode), false);
			};
      	}

	} // @END Unread Count


	// Load Widescreen userscript
	if (theMessageEvent.name === "GetWideScreenFromSettingsDone") {

	// Save the message into a variable
	wideScreen = theMessageEvent.message;
		// If unreadCount setting returns true, inject user script
		if(wideScreen){
			var jsNode = document.createElement('script');
			jsNode.type = 'text/javascript';
			jsNode.src = safari.extension.baseURI + "googlereaderforwiderscreens.user.js";

			// Wait until document is ready
			if (document.addEventListener) {
			  document.addEventListener("DOMContentLoaded", insertNode(jsNode), false);
			};
      	}

	} // @END Unread Count

};

// Inject javascripts
function insertNode(jsNode) {
	// document.getElementsByTagName("head")[0].appendChild(jsNode);
	document.body.appendChild(jsNode);
}

safari.self.addEventListener("message", messageHandler, false);

// Call for the loading functions.
GetColorfulListviewFromSettings();
GetUnreadCountFromSettings();
GetExpandButtonFromSettings();
GetWideScreenFromSettings();