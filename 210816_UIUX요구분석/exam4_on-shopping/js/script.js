$(document).ready(function(){
	//navi
	$('.navi>li').mouseover(function(){
		$(this).find('.submenu').stop(true).slideDown();
	}).mouseout(function(){
		$(this).find('.submenu').stop(true).slideUp();
	});


	//slide
	$('.imgslide a:gt(0)').hide();
	setInterval(function(){
		$('.imgslide a:first-child').fadeOut()
		.next().fadeIn()
		.end().appendTo('.imgslide');
	},3000);

	//tab
	$('.tabmenu>li').click(function(){
		$(this).addClass('active')
		.siblings().removeClass('active');
	});

	//modal
	$('.notice li').click(function(){
		$('#modal').addClass('active');
	});
	$('.btn').click(function(){
		$('#modal').removeClass('active');
	});
})