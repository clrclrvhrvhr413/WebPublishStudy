$(document).ready(function(){
	//navi
	$('.navi>li').mouseover(function(){
		$(this).find('.submenu').stop(true).slideDown(500);
	}).mouseout(function(){
		$(this).find('.submenu').stop(true).slideUp(500);		
	});

	//imgslide
	//첫 이미지를 제외한 이미지들을 숨김
	$('.imgslide a:gt(0)').hide();
	//일정한 간격마다 fade 효과
	setInterval(function(){
		$('.imgslide a:first-child').fadeOut()
		.next().fadeIn()
		.end().appendTo('.imgslide');
		//first-child에 있는 a를 .imgslide 가장 아래에 넣는다 -> 위치가 변경됨
	},4000);

	//notice - modal
	$('.notice li:first').click(function(e){
		e.preventDefault();
		$('#modal').addClass('active');
	});
	$('.btn').click(function(e){
		$('#modal').removeClass('active');
	});
});