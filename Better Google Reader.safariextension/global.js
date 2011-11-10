/*
//
// By Vidal van Bergen.
//
// Available Scripts:
//          > Colorful Listview
//                  Show different colors for different feeds
//          > Unread Count
//                  Show true unread count instead of "1000+"
//          > Collapse/Expand item
//                  Show a "Collapse/Expand" button next to the "Previous item" / "Next item" buttons.
//          > Widescreen
//                  Span the article over the entire width available instead of constraining it to a fixed with.
//          > Article Focus
//                  Focus on the article by hiding the header and footer.
//                  TODO: make this work by keyboard shortcut.
//          > Inline Preview
//                  Show an inline preview of the webpage inside the article.
*/

var extensionPath = safari.extension.baseURI;

// Get Colorful List view setting
function GetColorfulListviewFromSettings() {
    safari.self.tab.dispatchMessage("GetColorfulListviewFromSettings");
};

// Get Unread Count setting
function GetUnreadCountFromSettings() {
    safari.self.tab.dispatchMessage("GetUnreadCountFromSettings");
};

// Get Wide Screen setting
function GetWideScreenFromSettings() {
    safari.self.tab.dispatchMessage("GetWideScreenFromSettings");
};

// Get Article Focus setting
/*function GetArticleFocusFromSettings() {
    safari.self.tab.dispatchMessage("GetArticleFocusFromSettings");
};*/

// Get Inline Preview setting
function GetInlinePreviewFromSettings() {
    safari.self.tab.dispatchMessage("GetInlinePreviewFromSettings");
};

// Get Starred Counter setting
function GetStarredCounterFromSettings() {
    safari.self.tab.dispatchMessage("GetStarredCounterFromSettings");
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
            jsNode.src = safari.extension.baseURI + "userscripts/" + "googlereaderunreadcount.user.js";

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
            jsNode.src = safari.extension.baseURI + "userscripts/" + "googlereadercolorfullistview.user.js";

            // Wait until document is ready
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", insertNode(jsNode), false);
            };
        }

    } // @END Colorful List View


    // Load Widescreen userscript
    if (theMessageEvent.name === "GetWideScreenFromSettingsDone") {

    // Save the message into a variable
    wideScreen = theMessageEvent.message;
        // If unreadCount setting returns true, inject user script
        if(wideScreen){
            var jsNode = document.createElement('script');
            jsNode.type = 'text/javascript';
            jsNode.src = safari.extension.baseURI + "userscripts/" + "googlereaderforwiderscreens.user.js";

            // Wait until document is ready
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", insertNode(jsNode), false);
            };
        }

    } // @END Widescreen


    // Load Article Focus script
    /*if (theMessageEvent.name === "GetArticleFocusFromSettingsDone") {

    // Save the message into a variable
    articleFocus = theMessageEvent.message;
        // If unreadCount setting returns true, inject user script
        if(articleFocus){
            var jsNode = document.createElement('script');
            jsNode.type = 'text/javascript';
            jsNode.src = safari.extension.baseURI + "userscripts/" + "articlefocus.js";

            // Wait until document is ready
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", insertNode(jsNode), false);
            };
        }

    } // @END Article Focus */

    // Load Inline Preview userscript
    if (theMessageEvent.name === "GetInlinePreviewFromSettingsDone") {

    // Save the message into a variable
    inlinePreview = theMessageEvent.message;
        // If unreadCount setting returns true, inject user script
        if(inlinePreview){
            var jsNode = document.createElement('script');
            jsNode.type = 'text/javascript';
            jsNode.src = safari.extension.baseURI + "userscripts/" + "googlereaderpreviewenhanced.user.js";

            // Wait until document is ready
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", insertNode(jsNode), false);
            };
        }

    } // @END Widescreen

    // Load Starred Counter userscript
    if (theMessageEvent.name === "GetStarredCounterFromSettingsDone") {

    // Save the message into a variable
    starredcounter = theMessageEvent.message;
        // If starredcounter setting returns true, inject user script
        if(starredcounter){
            var jsNode = document.createElement('script');
            jsNode.type = 'text/javascript';
            jsNode.src = safari.extension.baseURI + "userscripts/" + "googlereaderstarredcounter.user.js";

            // Wait until document is ready
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", insertNode(jsNode), false);
            };
        }

    } // @END Starred Counter

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
GetWideScreenFromSettings();
// GetArticleFocusFromSettings();
GetInlinePreviewFromSettings();
GetStarredCounterFromSettings();