$(document).ready(function(){
	// 1초동안 너비값이 12%->35%
	/**
	 * 1초동안 너비값이 12%->35% !!css의 transition이랑 animate 충돌일어나지 않도록
	 * h3, p 위치 이동*/
	 $('article').on('mouseover',function(){
	 	$(this).stop(true).animate({'width':'35%'},1000);
	 	$(this).find('h3').stop(true).animate({'right':'10px'},1000);
	 	$(this).find('p').stop(true).animate({'right':'10px'},1000);
	 }).on('mouseout',function(){
	 	$(this).stop(true).animate({'width':'12%'},1000);	 	
	 	$(this).find('h3').stop(true).animate({'right':'-310px'},400);
	 	$(this).find('p').stop(true).animate({'right':'-310px'},400);
	 })
})