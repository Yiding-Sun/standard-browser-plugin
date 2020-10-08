"use strict";

function hideAll() {
  var head = document.head;
  $("body").attr("class", "");
  var html = document.getElementsByTagName("html")[0];
  html.childNodes.forEach(function (value) {
    if (value != head && value.nodeType == 1) {
      $(value).addClass("tohide");
    }
  });
  $("html").css("background-color", "#ffffff").prepend($("<div></div>").attr("id", "page-stay")).append($("<div></div>").attr("id", "page-show"));
  $(".tohide").hide();
}

function render() {
  hideAll();
  $("#page-stay").append($("<button></button>").text("Click to toggle!").click(function () {
    if ($("#page-show").is(":visible")) $("#page-show").fadeOut("fast", function () {
      return $(".tohide").fadeIn("fast");
    });else $(".tohide").fadeOut("fast", function () {
      return $("#page-show").fadeIn("fast");
    });
  })).css({
    position: "absolute",
    zIndex: 9999
  });
}

function mapAll() {
  function inform(name, to, type) {
    for (var item in type) {
      switch (item) {
        case "on":
          break;

        case "val":
          $(to).val($(name).val());
          break;

        case "click":
          $(to).click();
          break;

        case "attr":
          type.attr.forEach(function (v) {
            return $(to).attr(v, $(name).attr(v));
          });
          break;

        case "css":
          type.css.forEach(function (v) {
            return $(to).css(v, $(name).css(v));
          });
          break;

        default:
          console.error("item:" + item + " is not supported for now");
      }
    }
  }

  pageData.patten.maps.forEach(function (map) {
    map.types.forEach(function (type) {
      switch (type.on) {
        case "start":
          inform(map.name, map.to, type);
          break;

        default:
          $(map.name).on(type.on, function () {
            return inform(map.name, map.to, type);
          });
      }
    });
  });
}

function process() {
  render();
  $("#page-show").append(pageData.html);
  mapAll(); //URL改变后自动刷新页面

  setInterval(function () {
    if (originURL != window.location.href) {
      window.location.reload();
    }
  }, 200);
}

function matchURL(url) {
  data.forEach(function (rule) {
    return rule.pattens.forEach(function (p) {
      if (pageData == undefined && eval(p.url).test(url)) {
        pageData = rule;
        pageData.patten = p.patten;
        process();
      }
    });
  });
}

var originURL = window.location.href;
var pageData;
matchURL(originURL);