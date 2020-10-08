"use strict";

function attr(a) {
  return {
    on: "start",
    attr: a
  };
}

function css(a) {
  return {
    on: "start",
    css: a
  };
}

var listenTypes = {
  text: {
    on: "keyup",
    val: ""
  },
  button: {
    on: "click",
    click: ""
  },
  img: attr(["src"]),
  classType: attr(["class"])
};
var baiduHomepagePatten = {
  maps: [{
    name: "#sb_inputbox",
    to: "#kw",
    types: [listenTypes.text]
  }, {
    name: "#sb_searchbutton",
    to: "#su",
    types: [listenTypes.button]
  }, {
    name: "#s_lg_img",
    to: "#sb_img",
    types: [listenTypes.img]
  }]
};
var bingHomepagePatten = {
  maps: [{
    name: "#sb_inputbox",
    to: "#sb_form_q",
    types: [listenTypes.text]
  }, {
    name: "#sb_searchbutton",
    to: "#sb_form_go",
    types: [listenTypes.button]
  }, {
    name: ".hp_sw_logo",
    to: "#sb_img",
    types: [listenTypes.classType]
  }]
};
var soHomepagePatten = {
  maps: [{
    name: "#sb_inputbox",
    to: "#input",
    types: [listenTypes.text]
  }, {
    name: "#sb_searchbutton",
    to: "#search-button",
    types: [listenTypes.button]
  }, {
    name: ".skin-logo",
    to: "#sb_img",
    types: [listenTypes.classType]
  }]
};
var sogouHomepagePatten = {
  maps: [{
    name: "#sb_inputbox",
    to: "#query",
    types: [listenTypes.text]
  }, {
    name: "#sb_searchbutton",
    to: "#stb",
    types: [listenTypes.button]
  }, {
    name: ".content .logo span",
    to: "#sb_img",
    types: [css(["background", "width", "height"])]
  }]
};
var data = [{
  type: "serach_homepage",
  pattens: [{
    url: /^https?\:\/\/www\.baidu\.com\/$/,
    patten: baiduHomepagePatten
  }, {
    url: /^https?\:\/\/cn\.bing\.com\/$/,
    patten: bingHomepagePatten
  }, {
    url: /^https?\:\/\/www\.so\.com\/([^s][^?][\u0000-\u00ff]*)?$/,
    patten: soHomepagePatten
  }, {
    url: /^https?\:\/\/www\.sogou\.com\/$/,
    patten: sogouHomepagePatten
  }],
  html: "<img id='sb_img'/><br/><input id='sb_inputbox'></input><br/><button id='sb_searchbutton'>Search!</button>"
}];