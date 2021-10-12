$(function(){
	function initScene1(){
		var imgs ='';
		for(var i=1;i<101;i++){
			imgs += `<img src="img/pic_${i}.jpg" alt="imgs">`
		}
		$('.section').html(imgs);


		var	$container = $('#scene-1 .section'),
			$images = $container.find('img'),
			$frameLength = $images.length,
			currentFrame =0,
			counter=0,
			velocity=0, //속도
			timer=null;

		// delta : 휠다운<0, 휠 업>0
		$container.on('mousewheel',function(e,delta){
			if (delta<0) {velocity+=1.5}
			else if(delta>0){velocity-=1.5}

			startAnimation();
		});


		function startAnimation(){
			if (!timer) {
				timer = setInterval(animateSequence,500/30);
			}
		}
		function stopAnimation(){
			clearInterval(timer);
			timer=null;
		}


		function animateSequence() {
			console.log('start')
			var nextFrame;
			velocity*=0.4;

			if (-0.00001<velocity && velocity<0.00001) { stopAnimation(); }
			else {
				counter = (counter+velocity)%$frameLength;
			}

			nextFrame = Math.floor(counter);

			if (currentFrame != nextFrame) {
				$images.eq(nextFrame).show();
				$images.eq(currentFrame).hide();
				currentFrame = nextFrame;
			}
		}
	}
	initScene1();
})