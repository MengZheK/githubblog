jQuery(function($){
	$("#preview1 #annotation").css("background-image","url(img/bg_spot1.png)")
	$("#preview2 #annotation").css("background-image","url(img/bg_spot1_blk.png)")
	$("#preview3 #annotation").css("background-image","url(img/bg_spot2.png)")
	$("#preview4 #annotation").css("background-image","url(img/bg_spot3.png)")
	
	if ($.browser.msie && $.browser.version >= 7 && $.browser.version < 8) {
		$("#preview4 h1.title").show().position({top:0,left:0})
		$("#preview4 h1.title").width(170)
	} 
	
})