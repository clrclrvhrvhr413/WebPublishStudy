$(document).ready(function(){
//navi
	$('.navi>li').mouseover(function(){
		$(this).find('.submenu').stop(true).slideDown(500);
	});
	$('.navi>li').mouseout(function(){
		$(this).find('.submenu').stop(true).slideUp(500);
	});


//modal
	$('.notice li:first').click(function(){
		$('#modal').addClass('active');
	});
	$('#modal .modal_up .btn').click(function(){
		$('#modal').removeClass('active');
	})

//tab
	$('.tabmenu>li>a').click(function(){
		$(this).parent().addClass('active')
		.siblings().removeClass('active');
	});

//imgslide 순서 : 3(처음만)-1-2-3 -1-2-3 -반복                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
	// $('.imgslide>a').eq(2).css('width',0);
	// $('.imgslide>a').eq(1).css('width',0);
	var now =0;
	var imgs =2;
	$('.imgslide>a').eq(0).siblings().animate({width:0});
	setInterval(function(){
		now = (now === imgs)? 0: now+=1;

		$('.imgslide>a').eq(now-1).animate({width:0});
		$('.imgslide>a').eq(now).animate({width:'800px'});

	},3000);
});