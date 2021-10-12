$(document).ready(function(){
	// menu - header.top이 내려오게 하면 submenu가 전체창크기를 가진 것 같은 착시
	$('.navi').mouseover(function(){
		$('.submenu').stop(true).slideDown();
		$('.top').stop(true).animate({'height':'220px'});
	}).mouseout(function(){
		$('.submenu').stop(true).slideUp();
		$('.top').stop(true).animate({'height':'100px'});
	});

	// slide
	$('.imgslide>a').eq(0).siblings().hide();
	var now=0;
	var img = $('.imgslide>a').length-1;
	setInterval(function(){
		now = (now===img)?0:now+=1;
		$('.imgslide>a').eq(now-1).fadeOut();
		$('.imgslide>a').eq(now).fadeIn();

	},3000);

	// modal
	$('.notice li').click(function(){
		$('#modal').addClass('active');
	});
	$('.btn').click(function(){
		$('#modal').removeClass();		
	});

});