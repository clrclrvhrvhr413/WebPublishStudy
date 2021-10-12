// 정보나눔
function winOpen(){
	window.open('contact.html','child','width=500 height=300');
}


$(document).ready(function(){
	$('.nav>li').mouseover(function(){
		$(this).children('.submenu').stop(true).slideDown();
	}).mouseout(function(){
		$(this).children('.submenu').stop(true).slideUp();
	});

	$('.imgs>img').eq(0).siblings().css({
		'margin-left':'-2000px'
	});
	setInterval(function(){slide();},3000);

	var imgs =2;
	var now =0;
	function slide(){
		now = (now===imgs)?0:now+=1;
		$('.imgs>img').eq(now-1).css({
			'margin-left':'-2000px'
		});
		$('.imgs>img').eq(now).css({
			'margin-left':'0px'
		});
	}

});