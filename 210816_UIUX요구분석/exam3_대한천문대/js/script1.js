$(document).ready(function(){
	//navi 마우스오버 되는 범위 주의! a에 mouseover면 서브메뉴가 유지가 안됨
	$('.navi>li').mouseover(function(){
		$(this).find('.submenu').stop(true).slideDown(500);
	}).mouseout(function(){
		$(this).find('.submenu').stop(true).slideUp(500);
	});

	//imgslide
	$('.imgslide>a:gt(0)').hide();
	setInterval(function(){
		$('.imgslide>a:first-child').fadeOut().next().fadeIn()
		.end().appendTo('.imgslide');
	},3000);

	//tabmenu
	$('.tabmenu>li>a').click(function(){
		$(this).parent().addClass('active')
		.siblings().removeClass('active');
	});

	//modal
	$('.notice li').click(function(e){
		// e.preventDefault();
		$('#modal').addClass('active');
	});
	$('.btn').click(function(){
		$('#modal').removeClass('active');
	});
});