$(function(){
	function activateSc(){
		var $content = $('#scene-2-content'),
			$charts = $content.find('.chart');

		$content.stop().animate({right:0},1200,'swing')

		// circle
		$charts.each(function(){
			var $chart = $(this),
				$circleLeft = $chart.find('.left .circle-mask-inner').css({transform:'rotate(0deg)'}),
				$circleRight = $chart.find('.right .circle-mask-inner').css({transform:'rotate(0deg)'}),
				$percentNum = $chart.find('.percent-number'),
				$percentData = $percentNum.text();

			$percentNum.text(0);
			// $({percent:0}).delay(1000).animate({},{});
			$({percent:0}).delay(1000).animate({percent:$percentData},{
				duration:1500,
				progress:function(){
					var now = this.percent;
					var deg = now*360/100;
					degRight = Math.min(Math.max(deg,0),180);
					degLeft = Math.min(Math.max(deg-180,0),180);

					$circleRight.css({
						transform:`rotate(${degRight}deg)`
					});
					$circleLeft.css({
						transform:`rotate(${degLeft}deg)`
					});
					$percentNum.text(Math.floor(now));
				}
			});
		});
	}

	activateSc();
})
