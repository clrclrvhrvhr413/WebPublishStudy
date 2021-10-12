$(function(){
	var $toggle = $('#toggle'),
		$banner = $('#banner'),
		$sound_btn = $('#sound_btn'),
		$img = $banner.find('img');
	var cast = []; //풍성 객체
	var $banner_height = $banner.css('height');

	//audio 객체 생성
	function bgm_init(){
		var bgm = new Audio(); //<audio preload="auto"></audio>
		bgm.src ='img/bgm.mp3'
		bgm.loop = true;

		$('body').append(bgm);
	}

	// 풍선
	function ball_init(){
		$img.each(function(i){
			$img.eq(i).css('left','-9999px').css('top','-9999px');
			set_ballon(i);
		});
	}
	function set_ballon(num) {
		//풍선 랜덤 width,height 고려
		// var x = Math.floor(Math.random()*10+1);
		var x = Math.floor(Math.random()*(500-10)+10);
		// var y = Math.floor(Math.random()*(400-120)+120);
		var y = Math.floor(Math.random()*(120)+100);
		// var size = Math.floor(Math.random()*(200-100)+100);
		var size = Math.floor(Math.random()*(200-100)+50);
		var angle = Math.floor(Math.random()*(360-0)+0);
		// var speed = Math.random()*(2-0)+0;
		var speed = Math.random()*(1-0)+0.1;

		cast[num]={
		x:x,
		y:-y,
		size:size,
		angle:angle,
		speed:speed
		};
	}
	function animate_ballon(){
		$img.each(function(i){
			$img.eq(i).css('left',`${cast[i].x}px`)
				.css('top',`${cast[i].y}px`)
				.css('height',`${cast[i].size}px`)
				.css('transform',`rotate(${cast[i].angle}deg)`);

			if (cast[i].y<parseInt($banner_height)) {
				cast[i].y+=cast[i].speed;
				cast[i].angle+=cast[i].speed;
			}
			else set_ballon(i);
		});
	}

	bgm_init();
	ball_init();
	setInterval(function(){animate_ballon();});

	$toggle.click(function(){
		$banner.toggleClass('active');
		if($banner.hasClass('active')){$(this).html('배너 닫기');}
		else {
			$(this).html('배너 열기');

			var bgm = $('audio');
			bgm[0].pause();
			$sound_btn.removeClass('active');
			$sound_btn.attr('src',"img/sound_off.png");
		}
	});

	$banner.click(function(e){
		window.open('https://pixabay.com/ko/images/search/%ED%92%8D%EC%84%A0/','_blank');
	})

	$sound_btn.click(function(e){
		var bgm = $('audio');
		$sound_btn.toggleClass('active');
		if ($sound_btn.hasClass('active')) {
			$(this).attr('src',"img/sound_on.png");
			bgm[0].play();
		}else {
			$(this).attr('src',"img/sound_off.png");
			bgm[0].pause();
		}
		// 둘다 됨
		// e.stopPropagation();
		return false;
	});

})