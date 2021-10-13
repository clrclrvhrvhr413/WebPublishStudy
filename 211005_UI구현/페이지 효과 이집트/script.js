$(function(){
	$('#container').addClass('start');

	$('nav li').click(function(){
		$('nav li').removeClass('on');
		$(this).addClass('on');

		$('#container').css('max-width','100%');
		var id = $(this).attr('data-role');

		$('.content').removeClass('prev this next');
		$(`#${id}`).addClass('this').prevAll().addClass('prev');
		$(`#${id}`).addClass('this').nextAll().addClass('next');
	});
});