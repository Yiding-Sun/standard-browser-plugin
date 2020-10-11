"use strict";
function hideAll() {
    var head = document.head;
    $("body").attr("class", "");
    var html = document.getElementsByTagName("html")[0];
    html.childNodes.forEach((value) => {
        if (value != head && value.nodeType == 1) {
            $(value).addClass("tohide");
        }
    })
    $("html").css("background-color", "#ffffff")
        .prepend($("<div></div>").attr("id", "page-stay"))
        .append($("<div></div>").attr("id", "page-show"));
    $(".tohide").hide();
}
function render() {
    hideAll();
    $("#page-stay").append($("<button></button>").text("Click to toggle!").click(
        () => {
            if ($("#page-show").is(":visible"))
                $("#page-show").fadeOut("fast", () => $(".tohide").fadeIn("fast"))
            else
                $(".tohide").fadeOut("fast", () => $("#page-show").fadeIn("fast"))
        }
    )).css({
        position: "absolute",
        zIndex: 9999
    });
}
function execAction(name, value, type) {
    for (var a in type) {
        switch (a) {
            case "val":
                $(name).val(value);
                break;
            case "click":
                $(name).click();
                break;
            case "attr":
                $(name).attr(type.attr, value);
                break;
            case "css":
                $(name).css(type.css, value);
                break;
            default:
                console.error("'" + a + "' in " + type + " don't belong to this in executing");
                break;
        }
    }
}
function getValue(name, type) {
    for (var a in type) {
        switch (a) {
            case "on": break;
            case "val":
                return $(name).val();
            case "attr":
                return $(name).attr(type.attr);
            case "css":
                return $(name).css(type.css);
            default:
                console.error("'" + a + "' in " + type + " don't belong to this in getting value");
                break;
        }
    }
}
function mapAll() {
    function changeEmpty(a) {
        return a == undefined ? {} : a;
    }
    var listeners = Object.assign({}, changeEmpty(pageData.userInterface.listeners), changeEmpty(pageData.patten.listeners));
    var actions = Object.assign({}, changeEmpty(pageData.patten.actions), changeEmpty(pageData.userInterface.actions));
    for (var listenName in listeners) {
        //记得用let
        let listener = listeners[listenName];
        let action = actions[listenName];
        if (action.useToShow == true) {
            $(action.name).show();
        }
        listener.types.forEach(listenType => {
            function run() {
                action.types.forEach(actionType => {
                    execAction(action.name, getValue(listener.name, listenType), actionType);
                })
            }
            switch (listenType.on) {
                case "start":
                    run();
                    break;
                default:
                    $(listener.name).on(listenType.on, () => run());
                    break;
            }
        })
    }
}
function process() {
    render();
    $("#page-show").append(pageData.userInterface.html);
    mapAll();

    //URL改变后自动刷新页面
    setInterval(function () {
        if (originURL != window.location.href) {
            window.location.reload();
        }
    }, 200);

}
function matchURL(url) {
    rules.forEach(rule => rule.pattens.forEach(p => {
        if (pageData == undefined && eval(p.url).test(url)) {
            pageData = rule;
            pageData.patten = p.patten;
            process();
        }
    }))
}
var originURL = window.location.href;
var pageData;
matchURL(originURL);