$(document).ready(function(){
	$('.btnMenu').on('click',function(){
		/**햄버거 버튼 클릭->
		 * 햄버거 사라짐
		 * nav,section 클래스 추가*/
		$(this).toggle();
		$('nav').addClass('on');
		$('section').addClass('on');
	});
	/*$('#gnb a').each(function(index){
		/**메뉴 바 클릭->
		 * nav,section,article 클래스 삭제
		 * 햄버거 버튼 보임
		 * 해당 영화 화면 보임 (article 클래스 추가)
		 * 화면 넘어가는 효과
		 *
		 $(this).on('click',function(){
			$('nav').removeClass('on');
			$('section').removeClass('on');
			$('article').removeClass('on');
			$('.btnMenu').toggle();
			$('section article').eq(index).addClass('on');
		 });
	});*/
	$('nav li').on('click',function(){
		var i = $(this).index();
		$('nav').removeClass('on');
		// $('section article:visible').fadeOut(1000);
		$('section').removeClass('on');
		$('article').removeClass('on');
		$('.btnMenu').toggle();
		$('section article').eq(i).addClass('on');
	});
});