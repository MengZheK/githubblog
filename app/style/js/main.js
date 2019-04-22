var _defaultWidth = $(window).width(),
    _defaultHeight = $(window).height();
var _defaultWidth = $(window).width(),
    _defaultHeight = $(window).height();
var sUserAgent = navigator.userAgent.toLowerCase();
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
var bIsMidp = sUserAgent.match(/midp/i) == "midp";
var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
var bIsAndroid = sUserAgent.match(/android/i) == "android";
var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
var bIsFirefox = sUserAgent.match(/Firefox/i) == "firefox";
var url = ["http://www.pinghai.org","https://itunes.apple.com/"];
$(function(){
    if((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        $(".mobile_download").show();
        $(".pc_download").hide();
        $(".bottom_tips").hide();
        if(bIsIpad || bIsIphoneOs) {
            $(".mobile_download").attr("href",url[1]);
        } else {
            $(".mobile_download").attr("href",url[0]);
        }
        $("#buy").attr("href","http://kuaibao.qq.com/s/MEDIANEWSLIST?chlid=5371135&from=singlemessage&isappinstalled=1");

    } else {
        $(".mobile_download").hide();
        $(".pc_download").show();
         $(".bottom_tips").show();
        browserRedirect();
    }
})
function browserRedirect() {
    if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {

    } else {
        var windowHeight = $(window).height(),
            windowWidth = $(window).width();
        if(_defaultWidth == windowWidth , _defaultHeight == windowHeight ,  windowHeight > 700 ) {
            $(".my_section").css("zoom",1);
        } else {
            var t = (windowHeight - 135) / 600;
            $(".my_section").css("zoom",t);
        }
    }
}

//hejia 2014-11-19 add

var my_section1= {
    init : function(){
        $(".cod_rom img").each(function(){
            var left = 400*(Math.random()-0.5);
            var top = 100*(Math.random()-0.5);
            $(this).css({ 'transform': 'translate3d('+left+'px,'+top+'px,0)'}).removeClass('animSect1')
        })
    },
    anim : function(){
        $(".cod_rom img").each(function(i){
            var _this = $(this);
            var _i = i+(0.1*i*i)
            setTimeout(function(){
               _this.addClass("animSect1");
            },_i*50+100)
        })
    }
}
var my_section2= {
    init : function(){
        $(".shouhuanImg img").css({ 'transform': 'translate3d('+200+'px,'+0+'px,0)'}).removeClass('animSect2')
    },
    anim : function(){

        setTimeout(function(){
              $(".shouhuanImg img").addClass('animSect2');
         },100)

    }
}

$(function(){

    if(bIsFirefox && _defaultHeight <= 660 ) {
        $("#iphone_slider li").css("width",$("#iphone_slider").width() * 1 + "px");
        var first = $("#iphone_slider_ul li").eq(0).clone();
        $("#iphone_slider_ul").append(first);
        $("#iphone_slider_ul").css("width",$("#iphone_slider li").length * $("#iphone_slider").width());

        $("#iphone_slider li").css({
            "float" : "left",
            "position" : "relative"
        })
        setInterval(goImage,2500);
    } else {
        $('#iphone_slider_ul').bxSlider({
            pager: false,
            controls : false,
            pause : 2500,
            infiniteLoop: true,
            wrapperClass: 'mp-bx-wrapper',
            auto: true
        });
    }
});
var t = 0;
function goImage () {
    var max = $("#iphone_slider_ul").width(),
        items = $("#iphone_slider li").width();
    t = t - items;
    $("#iphone_slider_ul").css("transition", '0.5s');
    $("#iphone_slider_ul").css("transform", 'translate3d('+ t + 'px,0,0)');
    tfm();
}
function tfm () {
    var a = (t - $("#iphone_slider").width()) * -1;
    var b = 0;
    if(a == $("#iphone_slider li").length * $("#iphone_slider").width()) {
        setTimeout(gotoPage,600)
        t = b;
    }
}
function gotoPage () {
    $("#iphone_slider_ul").css("transition", '0s');
    $("#iphone_slider_ul").css("transform", 'translate3d(0px,0,0)');
}