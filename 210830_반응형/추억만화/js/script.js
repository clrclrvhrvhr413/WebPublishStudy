$(function(){
	var numAc = $('article').length;
	var numNavi = $('#navi li').length;
	var widSec = 200*numAc;
	var widTotal = widSec+600; //슬로건 여백

	$('section').width(widTotal);
	$('body').height(widSec);
	$('section').css('left',-3000);
	$('html,body').animate({'scrollTop':widSec});

	$('article h2').on('click',function(e){
		e.preventDefault();
		var src = $(this).children('a').attr('href');
		$('article').removeClass('on');
		$(this).parent().addClass('on');
		$(this).siblings('p').find('img').attr('src',src);

		// 안보이는 article 보이도록 위치 조정
		var winwid = $(window).width();
		var left = $(this).parent().index()*200 - (winwid-500)/2;
		$('html,body').scrollTop(left);
	});
	$('article span').on('click',function(){
		$(this).parent().removeClass('on');
	});
	$('#navi li').on('click',function(){
		var i = $(this).index();
		var posnavi = 1000*i;
		
		$('#navi li').removeClass('on');
		$(this).addClass('on');

		$('html,body').scrollTop(posnavi);
	});
	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();
		$('section').stop(true).animate({'left':-scroll});

		// 스크롤에 따른 메뉴 클래스 조정
		for(var li=0;li<numNavi;li++){
			if(scroll>=(numAc/numNavi)*200*li){
				$('#navi li').removeClass('on').eq(li).addClass('on');
			}
		}
	});
});