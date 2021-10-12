$(document).ready(function(){
	// menu
	$('.nav>li').mouseover(function(){
		$(this).children('.submenu').stop(true).slideDown();
	}).mouseout(function(){
		$(this).children('.submenu').stop(true).slideUp();
	});

	//slide
	$('#imageslide .imgs img').eq(0).siblings().css('margin-top','-1000px');
	var cnt=0;
	var end=4;
	start();
	// setInterval(function(){
	// 	cnt = (cnt===end)?0:cnt+=1;
	// 	$('.imgs img').eq(cnt-1).css('margin-top','-1000px');
	// 	$('.imgs img').eq(cnt).css('margin-top','0');
	// },3000);
	function start(){
		$('#imageslide .imgs img').eq(0).siblings().css('margin-top','-1000px');
		setInterval(slide,3000);
	}
	function slide(){
		$('.imgs img').css('transition','all 2s');
		cnt = (cnt===end)?0:cnt+=1;
		$('.imgs img').eq(cnt-1).css('margin-top','-1000px');
		$('.imgs img').eq(cnt).css('margin-top','0');
	}


	// modal
	$('.partner_info img').click(function(){
		$('#partner_up').addClass('active');
	});
	$('#btn-close').click(function(){
		$('#partner_up').removeClass();		
	})

});