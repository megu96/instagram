$(function () {
    $('.cate-wrap').on({
        'mouseenter': function () {
            $('.cate-menu:not(:animated)').slideDown(500)
        },
        'mouseleave': function () {
            $('.cate-menu').slideUp(500)
        }
    })
})


$(window).bind("load", function(){

	var url   = location.href;

	if(url == "https://myuniverse89.tistory.com/1"){
		$('.profile, .prolile-content').addClass('push');
	}

});

$(window).bind("load", function(){

	// URLにhogehogeが含まれていたら実行
	if(document.URL.match("/entry")) {
		$('.profile, .prolile-content').addClass('push');
	}

});