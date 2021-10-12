$(document).ready(function(){
	var i=0,
		wh = $(window).height(),
		nowTop, scroll;

	/**window resize 시 여러 section의 내용이 보임을 방지*/
	$(window).on('resize',function(){
		wh = $(window).height();
		nowTop = i*wh;
		$('html').animate({'scrollTop':nowTop},0);
	});

	/**메뉴 클릭 ->
	 * 메뉴 효과
	 * 해당 페이지로 이동*/
	$('.menu li').on('click',function(){
		i = $(this).index();
		$('.menu li').removeClass('on');
		$(this).addClass('on');

		wh = $(window).height();
		nowTop = i*wh;
		$('html').stop(true).animate({'scrollTop':nowTop},1000);
	});

	/**	mousewheel plugin, easing plugin
	 * 	delta [ wheel up : +, wheel down:- ]
	 *  easing 함수 찾아서 지정
	 *  ❕issue 아예 인식 안됨 -> 요소들간의 z-index 주의*/
	$('section').on("mousewheel",function(event,delta){
		//❕issue 추가해야하는 조건 - menu on class, prev/next가 없을경우 -> i를 재정의 함으로써 한번에 해결.
		if (delta>0 && i>0) {
			var prev = $(this).prev().offset().top;
			i = $(this).prev().index();
			$('html').stop(true).animate({'scrollTop':prev},1000,'easeOutBounce');
			$('.menu li').removeClass('on').eq(i).addClass('on');

		}else if(delta<0 && i<3){
			var next = $(this).next().offset().top; //선택한 요소의 좌표(top)값
			i = $(this).next().index();
			$('html').stop(true).animate({'scrollTop':next},1000,'easeOutBounce');		
			$('.menu li').removeClass('on').eq(i).addClass('on');
		}
	});

	/** 스크롤 직접 조작 ->
	 *  해당 위치의 메뉴 효과
	 *  스크롤 완료하면 해당 페이지 온전히 보이기
	 * 	❕issue 스크롤이 정수가 아니기 때문에 높이의 오차를 줘서 오류 방지*/
	$(window).on('scroll',function(event){
		scroll = $(window).scrollTop();
		i = parseInt(scroll/(wh-5));
		$('.menu li').removeClass('on').eq(i).addClass('on');

		/*❕issue 메뉴 클릭 시 중첩 -> 클릭 이벤트에서 stop(true) 추가*/
		$(this).on('mouseup',function(event){
			$('html').stop(true).animate({'scrollTop':wh*i},1000,'easeOutBounce');
		})
	});

	$('section').on('mousemove',function(e){
		var posX = e.pageX; var posY = e.pageY;
		// 1 번째 ---------------
		$('.p11').css({
			// 20은 css의 기존 bottom, right 값
			'bottom':50-(posY/30),
			'right':-100-(posX/30)
		});
		$('.p12').css({
			'bottom':-40+(posY/20),
			'right':-90+(posX/20)
		});
		$('.p13').css({
			'top':130-(posY/20),
			'right':80-(posX/20)
		});
		// 2 번째 ---------------
		$('.p21').css({
			'bottom':80-(posY/30),
			'right':-350-(posX/30)
		});
		$('.p22').css({
			'bottom':100+(posY/50),
			'right':50+(posX/50)
		});
		// 3 번째 ---------------
		$('.p31').css({
			'bottom':180-(posY/40),
			'right':80-(posX/40)
		});
		$('.p32').css({
			'bottom':40-(posY/20),
			'right':-150-(posX/20)
		});
		$('.p33').css({
			'top':0-(posY/20),
			'right':0-(posX/20)
		});
		// 4 번째 ---------------
		$('.p41').css({
			'bottom':100-(posY/30),
			'right':-90-(posX/30)
		});
		$('.p42').css({
			'bottom':-50+(posY/20),
			'right':50-(posX/20)
		});
	});
});