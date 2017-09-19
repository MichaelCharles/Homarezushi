/* global $ */
var language = navigator.language || navigator.browserLanguage; //for IE

if (language) {
    if (language === "ja-JP") {
        // route to ja
        window.location.replace("http://www.homarezushi.com/ja");
    }
    else {
        // route to en
        window.location.replace("http://www.homarezushi.com/en");
    }
}
