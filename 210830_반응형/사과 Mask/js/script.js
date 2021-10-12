$(function(){
	var win = window.innerWidth,
		hei = window.innerHeight,
		$img = $('.mask img');

	function initImg(){
		$img.css({
			width:`${win}px`,
			height:`${hei}px`,
			marginTop:`${-hei/2}px`,
			marginLeft:`${-win/2}px`
		});
	}

	function initScene3(){

		var $container = $('#scene-3'),
			$masks = $container.find('.mask'),
			$lines = $masks.find('.line'),
			maskLength = $masks.length,
			maskData = [];
		$masks.each(function(i){
			maskData[i] = {left:0}
		});

		resizeMask(-1);

		function resizeMask(active){
			// var w = $container.width(),
				// h = $container.height();
			var w = win, h = hei;

			$masks.each(function(i){
				var $this = $(this);
				var leftpos;

				if (active == -1) {
					leftpos = w/maskLength *i;
				}else if (active<i) {
					leftpos = w*(1-(maskLength-i)/10)
				}else {
					leftpos = w*i*0.05;
				}
				/*	active	 : 각 index 너비
				*		0 	 : -  10% 10% 10%
				*		1 	 : 5%  -  10% 10%
				* 		2 	 : 5%  5%  -  10%
				* 		2 	 : 5%  5%  5%  -	*/

				$(maskData[i]).stop().animate({
					left:leftpos
				},{
					duration:1000,
					easing:'linear',
					// progress - specifies a function to be executed after each step in the animation
					progress:function(){
						var now = this.left;
						$this.css({
							//rect (top, left, bottom, right)
							clip:`rect(0px ${w}px ${h}px ${now}px)`
						});
						$this.find($lines).css({
							left:now
						})
					}
				});
				
			});
		}

		$container.on({
			mouseenter:function(){
				resizeMask($(this).index())
			},
			mouseleave:function(){
				resizeMask(-1);
			}
		},'.mask')

		$(window).on('resize',function(){
			win = window.innerWidth,
			hei = window.innerHeight;
			resizeMask(-1);
			initImg();
		})
	}

	initImg();
	initScene3();
})
