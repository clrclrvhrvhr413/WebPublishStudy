$(function() {
	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();
		$('h1').text(scroll);
		$('section>article').eq(0).css({'transform':`translateZ(${scroll}px)`});
			$('section>article').eq(1).css({'transform':`translateZ(${-5000+scroll}px)`});
			$('section>article').eq(2).css({'transform':`translateZ(${-10000+scroll}px)`});
			$('section>article').eq(3).css({'transform':`translateZ(${-15000+scroll}px)`});
			$('section>article').eq(4).css({'transform':`translateZ(${-20000+scroll}px)`});

		if (scroll<5000) {
			$('.scrollNavi li').removeClass('on');
			$('section>article').removeClass('on');
			$('.scrollNavi li').eq(0).addClass('on');
			$('section>article').eq(0).addClass('on');
		}else if (scroll>=5000 && scroll<10000) {
			$('.scrollNavi li').removeClass('on');
			$('section>article').removeClass('on');
			$('.scrollNavi li').eq(1).addClass('on');
			$('section>article').eq(1).addClass('on');
		}else if (scroll>=10000 && scroll<15000) {
			$('.scrollNavi li').removeClass('on');
			$('section>article').removeClass('on');
			$('.scrollNavi li').eq(2).addClass('on');
			$('section>article').eq(2).addClass('on');
		}else if (scroll>=15000 && scroll<20000) {
			$('.scrollNavi li').removeClass('on');
			$('section>article').removeClass('on');
			$('.scrollNavi li').eq(3).addClass('on');
			$('section>article').eq(3).addClass('on');
		}else{
			$('.scrollNavi li').removeClass('on');
			$('section>article').removeClass('on');
			$('.scrollNavi li').eq(4).addClass('on');
			$('section>article').eq(4).addClass('on');
		}

		// var art = $('section>article').length;
		// for(var i=0; i<art;i++){
		// 	$('section>article').eq(i).css({'transform':`translateZ(${-(5000*i)+scroll}px)`});
		// 	if (scroll>=5000*i && scroll<5000*(i+1)) {
		// 		$('.scrollNavi li').removeClass('on');
		// 		$('section>article').removeClass('on');
		// 		$('.scrollNavi li').eq(i).addClass('on');
		// 		$('section>article').eq(i).addClass('on');
		// 	}
		// }

	});

	$('.scrollNavi li').on('click',function(){
		var index = $(this).index();
		// $(window).scrollTop(index*5000);
		$('html').animate({'scrollTop':index*5000},1500,'swing');
	});
})