$(document).ready(function(){
	var imgs ='';
	for(var i=1;i<501;i++){
		imgs += `<img src="img/pic_${i}.jpg" alt="imgs">`
	}

	$('section').html(imgs);
	$('body').on('mousemove',function(e){
		var posX = e.pageX;
		var wid = $(window).width();

		//백분율 = 위치값 / 장 너비 * 이미지 수
		var percent = Math.floor((posX/wid)*500);
		// console.log(percent)

		$('section>img').hide();
		$('section>img').eq(percent).show();
	})
})