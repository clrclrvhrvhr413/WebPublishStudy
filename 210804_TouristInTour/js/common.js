var isOver1 = false;
var isOver2 = false;

var isOver11 = false;
var isOver22 = false;

var isOver111 = false;
var isOver222 = false;

var isOver1111 = false;
var isOver2222 = false;

function goHide1(){
	if (!isOver1 && !isOver2) {
		$('.gnb_depth_2_1').fadeOut('fast');
	}
}
function goHide2(){
	if (!isOver11 && !isOver22) {
		$('.gnb_depth_2_2').fadeOut('fast');
	}
}
function goHide3(){
	if (!isOver111 && !isOver222) {
		$('.gnb_depth_2_3').fadeOut('fast');
	}
}
function goHide4(){
	if (!isOver1111 && !isOver2222) {
		$('.gnb_depth_2_4').fadeOut('fast');
	}
}



$(document).ready(function(){

// top 버튼 - scroll plugin 연결
	$('.s_point').smoothScroll();
// top 버튼 - mobile
	$(window).scroll(function(){
		if ($(document).scrollTop() < 50) {
			$('.to_top').addClass('hide');
		}else{
			$('.to_top').removeClass('hide');		
		}
	});


//네비게인션_하위 리스트 보이기
	//여행정보 : gnb_depth_2_1
		$('.openAll1').on('mouseover focus',function(){
			if (parseInt($('header').css('width')) > 800) {
				$('.gnb_depth_2_1').stop(true).fadeIn('fast');
				isOver1 = true;
			}
		}).mouseout(function(){
			isOver1 = false;

			$('.gnb_depth_2_1').mouseover(function(){
				isOver2 = true;
			}).mouseout(function(){
				isOver2 = false;
				setTimeout('goHide1()',200);
			});
			setTimeout('goHide1()',200);
		});
		$('.gnb_depth_2_1 .submenu_list li:last-child a').blur(function(){
			isOver1 = false;
			setTimeout('goHide1()',200);
		});

	//고객센터 : gnb_depth_2_2
		$('.openAll2').on('mouseover focus',function(){
			if (parseInt($('header').css('width')) >800) {
				$('.gnb_depth_2_2').stop(true).fadeIn('fast');
				isOver11 = true;
			}
		}).mouseout(function(){
			isOver11 = false;

			$('.gnb_depth_2_2').mouseover(function(){
				isOver22 = true;
			}).mouseout(function(){
				isOver22 = false;
				setTimeout('goHide2()',200);
			});
			setTimeout('goHide2()',200);
		});
		$('.gnb_depth_2_2 .submenu_list li:last-child a').blur(function(){
			isOver11 = false;
			setTimeout('goHide2()',200);
		});

	//상품투어 : gnb_depth_2_3
		$('.openAll3').on('mouseover focus',function(){
			if (parseInt($('header').css('width')) > 800) {
				$('.gnb_depth_2_3').stop(true).fadeIn('fast');
				isOver111 = true;
			}
		}).mouseout(function(){
			isOver111 = false;

			$('.gnb_depth_2_3').mouseover(function(){
				isOver222 = true;
			}).mouseout(function(){
				isOver222 = false;
				setTimeout('goHide3()',200);
			});
			setTimeout('goHide3()',200);
		});
		$('.gnb_depth_2_3 .submenu_list li:last-child a').blur(function(){
			isOver111 = false;
			setTimeout('goHide3()',200);
		});

	//티켓/가이드 : gnb_depth_2_4
		$('.openAll4').on('mouseover focus',function(){
			if (parseInt($('header').css('width')) > 800) {
				$('.gnb_depth_2_4').stop(true).fadeIn('fast');
				isOver1111 = true;
			}
		}).mouseout(function(){
			isOver1111 = false;

			$('.gnb_depth_2_4').mouseover(function(){
				isOver2222 = true;
			}).mouseout(function(){
				isOver2222 = false;
				setTimeout('goHide4()',200);
			});
			setTimeout('goHide4()',200);
		}).blur(function(){
			isOver1111 =false;
			setTimeout('goHide4()',200);
		});
		$('.gnb_depth_2_4 .submenu_list li:last-child a').blur(function(){
			isOver1111 = false;
			setTimeout('goHide4()',200);
		});



//모바일 메뉴
	$('.openMognb').click(function(){
		$('header').addClass('on');
		$('header .header_cont').slideDown('fast');

		// 모바일에서의 혹시 모를 방지와 이전 버전의 메서드. 현 버전에서는 지원 안함
		$('header .header_area .header_cont .closePop').show();
		$('body').bind('touchmove',function(){
			e.preventDefault();
		});
	});

	$('.header_cont .closePop').click(function(){
		$('header .header_cont').slideUp('fast');
		$('header').removeClass('on');

		// 모바일에서의 혹시 모를 방지와 이전 버전의 메서드. 현 버전에서는 지원 안함
		$('body').unbind('touchmove');
	})
	//모바일 닫기버튼 후 너비 확대시 네비게이션 안보이는 문제
	$(window).resize(function(){
		if (parseInt($('header').css('width')) > 800){
			$('.header_cont').show();
		}else{$('.header_cont').hide();}
	});

//프로그램 소개_더보기/접기 기능
	$('.program_list li .btn_more a').click(function(e){
		var subtxt = $(this).parent().parent().find('.subtxt');
		
		if (subtxt.css('display') === 'none') {
			$(this).text('접기');
			subtxt.css('display','inline');

		}else {
			$(this).text('더보기');			
			subtxt.css('display','none');
		}
		e.preventDefault();
	});




});