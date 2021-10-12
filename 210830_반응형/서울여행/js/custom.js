$(document).ready(function(){
	var theme ;
	$('nav li').on('click',function(){
		$('nav li').removeClass('on');
		$(this).addClass('on');
		
		theme = $(this).children('a').text();
		$('#wrap').removeClass().addClass(theme);
	});

	/**
	 * 06-11 morning
	 * 12-17 afternoon
	 * 18-21 evening
	 * 22-24, 00-05 night*/
	 var now = new Date();
	 var hr = now.getHours();
	 var min = now.getMinutes();
	 var sec = now.getSeconds();

	 if (hr>=6 && hr<12) {
	 	$('#wrap').removeClass().addClass('morning');
	 	$('nav li').removeClass().eq(0).addClass('on');
	 }
	 else if (hr>=12 && hr<17) {
	 	$('#wrap').removeClass().addClass('afternoon');
	 	$('nav li').removeClass().eq(1).addClass('on');
	 }
	 else if (hr>=18 && hr<21) {
	 	$('#wrap').removeClass().addClass('evening');
	 	$('nav li').removeClass().eq(2).addClass('on');
	 }
	 else {
	 	$('#wrap').removeClass().addClass('night');
	 	$('nav li').removeClass().eq(3).addClass('on');
	 }

	 // 시간 표시 - 한자릿수일 경우 수정 필요
	 setInterval(function(){
	 	now = new Date();
	 	hr = now.getHours();
	 	min = now.getMinutes();
	 	sec = now.getSeconds();
	 	if (hr<10) {hr = `0${hr}`;}
	 	if (min<10) {min = `0${min}`;}
	 	if (sec<10) {sec = `0${sec}`;}
		 $('figure p span').eq(0).text(hr);
		 $('figure p span').eq(1).text(min);
		 $('figure p span').eq(2).text(sec);
		
	 },100);
});