$(function(){
	var duration = 300;
/* buttons1 영역 */
	// animate에서는 background-color, color 값 지원안됨
	$('#buttons1 button:nth-child(-n+4)').hover(function(){
		$(this).css({
			'background-color':'#ae5e9b',
			'color':'#fff'
		});

	},function(){
		$(this).css({
			'background-color':'#fff',
			'color':'#ebc000'
		});
	});

	//2행  5,6,7,8 구하는 교집합
	$('#buttons1 button:nth-child(-n+8):nth-child(n+5)').on('mouseover',function(){
		$(this).stop().animate({
			borderWidth:'12px',
			color:'#ae5e9b'
		},duration,'swing');
	}).on('mouseout',function(e){
		$(this).stop().animate({
			borderWidth:'0px',
			color:'#ebc000'
		},duration,'linear');
	});

	//3행
	$('#buttons1 button:nth-child(n+9)').on('mouseover',function(){
		$(this).find('>span').stop().animate({
			width:'100%'
		},duration,'linear')
	}).on('mouseout',function(){
		$(this).find('>span').stop().animate({
			width:'0%'
		},duration,'linear')
	})


/* images 영역 */
	var $images = $('#images p');
	$images.on('mouseover',function(){
		$(this).find('span').stop().animate({
			opacity:1
		},duration);
	}).on('mouseout',function(){
		$(this).find('span').stop().animate({
			opacity:0
		},duration);
	});

	$images.filter(':nth-child(1)').on('mouseover',function(){
		// $(this).find('strong, span').stop().animate({
		$(this).find('strong').stop().animate({
			opacity:1
		},duration);
	}).on('mouseout',function(){
		// $(this).find('strong, span').stop().animate({
		$(this).find('strong').stop().animate({
			opacity:0
		},duration);
	});

	$images.filter(':nth-child(2)').on('mouseover',function(){
		$(this).find('strong').stop().animate({
			left:0,
			opacity:1
		},duration);
	}).on('mouseout',function(){
		$(this).find('strong').stop().animate({
			left:'-200%',
			opacity:0
		},duration);
	});

	$images.filter(':nth-child(3)').on('mouseover',function(){
		$(this).find('strong').stop().animate({
			bottom:0,
			opacity:1
		},duration);
		$(this).find('img').stop().animate({
			top:'-20px'
		},duration);
	}).on('mouseout',function(){
		$(this).find('strong').stop().animate({
			bottom:'-80px',
			opacity:0
		},duration);
		$(this).find('img').stop().animate({
			top:0
		},duration);
	});
/* buttons2 영역 */
	var $buttons2 = $('#buttons2 button');
	$('#buttons2 button').each(function(index){
		var pos = (index-1)*40;
		$(this).css('top',`${pos}px`);
	}).on('mouseover',function(){
		var $btn = $(this).stop().animate({
						backgroundColor:'#E2B76B'
					},duration,'linear');

		$btn.find('img:first-child').stop().animate({
			opacity:0
			// width:'80%'
		},duration);
		$btn.find('img:last-child').stop().animate({
			opacity:1,
			width:'100%'
		},duration);

	}).on('mouseout',function(){
		var $btn = $(this).stop().animate({
						backgroundColor:'#E2B76B'
					},duration,'linear');

		$btn.find('img:first-child').stop().animate({
			opacity:1
			// width:'80%'
		},duration);
		$btn.find('img:last-child').stop().animate({
			opacity:0,
			width:'80%'
		},duration);
	});

/* aside 영역 */
	var $aside = $('.page-main>aside');
	var $asideBtn = $aside.find('button').on('click',function(){
		$aside.toggleClass('open');
		if ($aside.hasClass('open')) {
			$aside.stop().animate({
				left:'-80px'
			},duration,'easeOutBack');		
			$aside.find('button img').attr('src','img/close.png');
		}else {
			$aside.stop().animate({
				left:'-350px'
			},duration,'easeInBack');		
			$aside.find('button img').attr('src','img/open.png');
		}
	});
})