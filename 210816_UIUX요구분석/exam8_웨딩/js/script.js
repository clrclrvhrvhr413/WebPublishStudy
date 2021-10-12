$(document).ready(function(){
	// menu
	$('.nav>li').mouseover(function(){
		$(this).children('.submenu').stop(true).slideDown();
	}).mouseout(function(){
		$(this).children('.submenu').stop(true).slideUp();
	});

	// modal
	$('.partner_info').click(function(){
		$('#modal').addClass('active');
	});
	$('#btn-close').click(function(){
		$('#modal').removeClass('active');
	});

	// slide
	// fisrt만 보이는 상황, 다음/이전 이미지가 없으면 a에 off 클래스 
	$('#btn_slides a.btn_slides_next').click(function(){
		if (!$('#slides li').last().is(':visible')) {
			$('#slides li:visible').hide().next('li').fadeIn();
			$('a.btn_slides_prev').removeClass('off');
		}
		if($('#slides li').last().is(':visible')){
			$(this).addClass('off');
		}
	});
	$('#btn_slides a.btn_slides_prev').click(function(){
		if (!$('#slides li').first().is(':visible')) {
			$('#slides li:visible').hide().prev('li').fadeIn();
			$('a.btn_slides_next').removeClass('off');
		}
		if($('#slides li').first().is(':visible')){
			$(this).addClass('off');
		}
	});


});