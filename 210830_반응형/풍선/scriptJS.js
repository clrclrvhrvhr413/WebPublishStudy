var toggle = document.getElementById('toggle'),
	banner = document.getElementById('banner'),
	sound_btn = document.getElementById('sound_btn'),
	img = banner.getElementsByTagName('img');
var cast = []; //풍성 객체
var banner_height = getComputedStyle(banner).height;


//audio 객체 생성
function bgm_init(){
	var bgm = new Audio(); //<audio preload="auto"></audio>
	bgm.src ='img/bgm.mp3';
	bgm.loop = true;

	document.body.appendChild(bgm);
}

// 풍선
function ball_init(){
	for(var i=0;i<img.length;i++){
		img[i].style.left = '-9999px';
		img[i].style.top = '-9999px';
		set_ballon(i);
	}
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
	for(var i=0;i<img.length;i++){
		img[i].style.left = `${cast[i].x}px`;
		img[i].style.top = `${cast[i].y}px`;
		img[i].style.height = `${cast[i].size}px`;
		img[i].style.transform = `rotate(${cast[i].angle}deg)`;


		if (cast[i].y<parseInt(banner_height)) {
			cast[i].y+=cast[i].speed;
			cast[i].angle+=cast[i].speed;
		}
		else set_ballon(i);
	}
}

bgm_init();
ball_init();
setInterval(function(){animate_ballon();});

toggle.onclick=function(){
	var attr = banner.getAttribute('class');
	if(attr == 'active'){
		banner.removeAttribute('class');
		toggle.innerHTML='배너 열기';

		var bgm = document.getElementsByTagName('audio');
		bgm[0].pause();
		sound_btn.removeAttribute('class');
		sound_btn.setAttribute('src',"img/sound_off.png");
	}
	else {
		banner.setAttribute('class','active')
		toggle.innerHTML='배너 닫기';

	}
};

banner.onclick=function(){
	window.open('https://pixabay.com/ko/images/search/%ED%92%8D%EC%84%A0/','_blank');
};

sound_btn.onclick=function(e){
	var bgm = document.getElementsByTagName('audio');
	var attr = sound_btn.getAttribute('class');
	if (attr == 'active') {
		sound_btn.setAttribute('src',"img/sound_off.png");
		sound_btn.removeAttribute('class');
		bgm[0].pause();
	}else {
		sound_btn.setAttribute('src',"img/sound_on.png");
		sound_btn.setAttribute('class','active');
		bgm[0].play();
	}
	// 애는 return으로 안됨
	e.stopPropagation();
	// return false;
};

