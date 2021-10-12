$(function() {
	$('html').animate({'scrollTop':0},2000,'swing');

	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();
		var art = $('section>article').length;

		for(var i=0; i<art;i++){
			$('section>article').eq(i).css({'transform':`translateZ(${-(5000*i)+scroll}px)`});
			if (scroll>=5000*i && scroll<5000*(i+1)) {
				$('.scrollNavi li').removeClass('on');
				$('section>article').removeClass('on');
				$('.scrollNavi li').eq(i).addClass('on');
				$('section>article').eq(i).addClass('on');
			}
		}
	});

	$('.scrollNavi li').on('click',function(){
		var index = $(this).index();
		// $(window).scrollTop(index*5000);
		$('html').stop(true).animate({'scrollTop':index*5000},1500,'swing');
	});

	$('body').on('mousemove',function(e){
		var posX = e.pageX/100;
		var posY = e.pageY/100;
		$('article.on>.obj11').css({'top': `${-150-posY}px`, 'left': `${670-posX}px`});
		$('article.on>.obj12').css({'top': `${200+posY}px`, 'right': `${-200+posX}px`});
		$('article.on>.obj13').css({'bottom': `${-100+posY}px`, 'left': `${-200+posX}px`});

		$('article.on>.obj21').css({'bottom': `${-100+posY/10}px`, 'right': `${610-posX}px`});
		$('article.on>.obj22').css({'bottom': `${-150+posY/10}px`, 'right': `${-50+posX}px`});

		$('article.on>.obj31').css({'bottom': `${40-(posY-100)}px`, 'right': `${-50+posX}px`});
		$('article.on>.obj32').css({'bottom': `${-130+posY-100}px`, 'left': `${100+posX}px`});

		$('article.on>.obj41').css({'top': `${-300+posY-150}px`, 'right': `${100-posX}px`});
		$('article.on>.obj42').css({'bottom': `${-440+posY-150}px`, 'left': `${0+posX}px`});
		$('article.on>.obj43').css({'bottom': `${-140+posY-150}px`, 'right': `${-300+posX}px`});

		$('article.on>.obj51').css({'bottom': `${-130+posY-200}px`, 'left': `${-100-posX}px`});
		$('article.on>.obj52').css({'top': `${430+posY-200}px`, 'right': `${430+posX}px`});
		$('article.on>.obj53').css({'bottom': `${-130+posY-200}px`, 'left': `${800+posX}px`});
	})
})