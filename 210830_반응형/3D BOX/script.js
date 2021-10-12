var wrapper = document.querySelector('.wrapper'),
	indicator = document.getElementById('indicator'),
	page = document.querySelectorAll('.page'),
	indicator_li, indicator_num=1,
	win_wid = page[0].offsetWidth;

var	page_len = page.length,
	yDeg =90;

function init_page(){
	for(var i=0;i<page_len;i++) {
		page[i].style.transform = `rotateY(${yDeg*i}deg) translateZ(${win_wid/2}px)`;
	}
}
function init_indicator(){
	var str;
	for(var i=1;i<page_len+1;i++){
		str = i===1?`<li class="active">${i}</li>`:`<li>${i}</li>`;
		indicator.innerHTML += str;
		// wrapper.style.transform = `rotateY(${yDeg*i}deg) translateZ(${-win_wid/2}px)`;
	}
	indicator_li = indicator.querySelectorAll('li');
	console.log(indicator_li)
}
function change_page(inum){
	for(var i=0;i<page_len;i++){
		indicator_li[i].removeAttribute('class','active');
	}
	indicator_li[inum-1].setAttribute('class','active');
	// translateZ rotateY 순서 중요
	wrapper.style.transform = ` translateZ(${-win_wid/2}px) rotateY(${-yDeg*(inum-1)}deg)`;
}

init_page();
init_indicator();
change_page(1);

// var indicator_num =1;
for(var i=0;i<page_len;i++){
	indicator_li[i].addEventListener('click',function(){
		indicator_num = parseInt(this.innerText);
		change_page(indicator_num);
	});
}

window.onresize = function(){
	win_wid = page[0].offsetWidth;
	init_page();
	wrapper.style.transform = ` translateZ(${-win_wid/2}px) rotateY(${-yDeg*(indicator_num-1)}deg)`;
};

// hammer plugin
var hammer = new Hammer(wrapper);

hammer.on('swipeleft',function(e){
	indicator_num = indicator_num===page_len ? indicator_num:indicator_num+=1;
	change_page(indicator_num);
}).on('swiperight',function(e){
	indicator_num = indicator_num===1 ? indicator_num:indicator_num-=1;
	change_page(indicator_num);
});
