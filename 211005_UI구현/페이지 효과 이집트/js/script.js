$(function(){
	$('#container').addClass('start');

	$('#menu1 .text_box p').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

	$('nav li').click(function(){
		$('nav li').removeClass('on');
		$(this).addClass('on');

		$('#container').css('max-width','100%');
		var id = $(this).attr('data-role');

		$('.content').removeClass('prev this next');
		$(`#${id}`).addClass('this').prevAll().addClass('prev');
		$(`#${id}`).addClass('this').nextAll().addClass('next');
	});

	$('.logo_box').click(function(){
		$('nav li').removeClass('on');
		$('.content').removeClass('prev this next');
		$('#container').css('max-width','1200px');
	});

	// menu2 slide
	$('.roll_left').click(function(){
		$('.book_roll li').eq(0).insertAfter('.book_roll li:last-child');
	});
	$('.roll_right').click(function(){
		$('.book_roll li').eq(-1).insertBefore('.book_roll li:first-child');
	});

	// menu3 accordio_box
	$('.accordio_box ol li').click(function(){
		$(this).siblings('li').removeClass('on');
		$(this).toggleClass('on');
	});

	// menu4 modal
	$('.thankyou_message .btn_box').click(function(){
		$('.thankyou_message').css('display','none');
	});
});