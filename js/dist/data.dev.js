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
    name: "#sbp_inputbox",
    to: "#kw",
    types: [listenTypes.text]
  }, {
    name: "#sbp_searchbutton",
    to: "#su",
    types: [listenTypes.button]
  }, {
    name: "#s_lg_img",
    to: "#sbp_img",
    types: [listenTypes.img]
  }]
};
var bingHomepagePatten = {
  maps: [{
    name: "#sbp_inputbox",
    to: "#sb_form_q",
    types: [listenTypes.text]
  }, {
    name: "#sbp_searchbutton",
    to: "#sb_form_go",
    types: [listenTypes.button]
  }, {
    name: ".hp_sw_logo",
    to: "#sbp_img",
    types: [listenTypes.classType]
  }]
};
var soHomepagePatten = {
  maps: [{
    name: "#sbp_inputbox",
    to: "#input",
    types: [listenTypes.text]
  }, {
    name: "#sbp_searchbutton",
    to: "#search-button",
    types: [listenTypes.button]
  }, {
    name: ".skin-logo",
    to: "#sbp_img",
    types: [listenTypes.classType]
  }]
};
var sogouHomepagePatten = {
  maps: [{
    name: "#sbp_inputbox",
    to: "#query",
    types: [listenTypes.text]
  }, {
    name: "#sbp_searchbutton",
    to: "#stb",
    types: [listenTypes.button]
  }, {
    name: ".content .logo span",
    to: "#sbp_img",
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
  html: "<img id='sbp_img'/><br/><input id='sbp_inputbox'></input><br/><button id='sbp_searchbutton'>Search!</button>"
}];