var actionTypes = {
    val: { val: "val" },
    click: { click: "click" },
    attr: function (a) {
        return { attr: a };
    },
    css: function (a) {
        return { css: a };
    }
}

var listenTypes = {
    text: { on: "keyup", val: "val" },
    click: { on: "click" },
    attr: function (a) {
        return { on: "start", attr: a };
    },
    css: function (a) {
        return { on: "start", css: a };
    }
}

var searchHomepageInterface = {
    html: "<img id='sbp_img' style='display:none;'/>\
    <img id='sbp_img_bg' style='display:none;width:440px;height:140px'/><br/>\
    <input id='sbp_inputbox'></input><br/>\
    <button id='sbp_searchbutton'>Search!</button>",
    listeners: {
        inputbox: { name: "#sbp_inputbox", types: [listenTypes.text] },
        searchButton: { name: "#sbp_searchbutton", types: [listenTypes.click] }
    },
    actions: {
        imgSrc: { name: "#sbp_img", types: [actionTypes.attr("src")], useToShow: true },
        imgBg: { name: "#sbp_img_bg", types: [actionTypes.css("background")], useToShow: true },
        imgClass: { name: "#sbp_img", types: [actionTypes.attr("class")], useToShow: true }
    }
}
var baiduHomepagePatten = {
    actions: {
        inputbox: { name: "#kw", types: [actionTypes.val] },
        searchButton: { name: "#su", types: [actionTypes.click] }
    },
    listeners: {
        imgSrc: { name: "#s_lg_img", types: [listenTypes.attr("src")] }
    }
}
var bingHomepagePatten = {
    actions: {
        inputbox: { name: "#sb_form_q", types: [actionTypes.val] },
        searchButton: { name: "#sb_form_go", types: [actionTypes.click] }
    }
    //TODO: 这里的图片
}
var soHomepagePatten = {
    actions: {
        inputbox: { name: "#input", types: [actionTypes.val] },
        searchButton: { name: "#search-button", types: [actionTypes.click] }
    },
    listeners: {
        imgClass: { name: ".skin-logo", types: [listenTypes.attr("class")] }
    }
}
var sogouHomepagePatten = {
    actions: {
        inputbox: { name: "#query", types: [actionTypes.val] },
        searchButton: { name: "#stb", types: [actionTypes.click] }
    },
    listeners: {
        imgBg: { name: ".content .logo span", types: [listenTypes.css("background")] }
    }
}


var rules = [
    {
        type: "serach_homepage",
        pattens: [
            { url: /^https?\:\/\/www\.baidu\.com\/$/, patten: baiduHomepagePatten },
            { url: /^https?\:\/\/cn\.bing\.com\/$/, patten: bingHomepagePatten },
            { url: /^https?\:\/\/www\.so\.com\/([^s][^?][\u0000-\u00ff]*)?$/, patten: soHomepagePatten },
            { url: /^https?\:\/\/www\.sogou\.com\/$/, patten: sogouHomepagePatten }
        ],
        userInterface: searchHomepageInterface
    }
]
