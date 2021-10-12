function winOpen(){
	var top = screen.height-window.outerHeight;

	window.open('contact.html','child',`width=400 height=300 top=${top}`);
}


$(document).ready(function(){
	//menu 
	$('.menu>li').mouseover(function(){
		$(this).children('.submenu').stop(true).slideDown();
	}).mouseout(function(){
		$(this).children('.submenu').stop(true).slideUp();
	});

	//modal
	$('.partner img').click(function(){
		$('#modal').addClass('active');
	});
	$('#modal .mobody .mobtn').click(function(){
		$('#modal').removeClass('active');
	});

	//slide
	// index용
	var index =0;
	$('.imgs div').eq(0).siblings().find('p').hide();
	$('.slidebtn>li').click(function(){
		index = $(this).index();
		// 이미지
		$('.imgs').animate({'margin-left':index*-1000});

		// 버튼
		$(this).siblings().removeClass('on').end().addClass('on');

		// 슬로건
		$('.imgs div').find('p:visible').fadeOut()
		.end().eq(index).find('p').fadeIn();
	});


	// index1용
	$('#imgsbar a').click(function(){
		$('#imgsbar a').removeClass('active');
		$(this).addClass('active');

		imgLeft = $(this).attr('img-left');
		$('.imgs').animate({left:imgLeft},'fast');
	});


});