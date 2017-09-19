/* global $ */
var language = navigator.language || navigator.browserLanguage; //for IE

if (language) {
    if (language == "en") {
        // route to en
        window.location.replace("http://www.homarezushi.com/en");
    }
    else {
        // route to ja
        window.location.replace("http://www.homarezushi.com/ja");
    }
}
