function winOpen(){
	var top = screen.height-window.innerHeight;
	console.log(top);
	window.open('contact.html','child',`width=400 height=300 top=${top}`);
}
function start(){
	$('.imgs>img').eq(0).siblings('img').css({
		'margin-left':'-1000px'
	});

	setInterval(slide,3000);
}
function slide(){
	var now=0;
	var img = $('.imgs>img').length-1;
	now = (now===img)?0:now+=1;
	$('.imgs>img').eq(now-1).css({
		'margin-left':'-1000px'
	});
	$('.imgs>img').eq(now).css({
		'margin-left':'0'
	});

}

$(document).ready(function(){
	//menu 
	$('.nav>li').mouseover(function(){
		$(this).children('.submenu').stop(true).slideDown();
	}).mouseout(function(){
		$(this).children('.submenu').stop(true).slideUp();
	});

	//modal
	$('.partner_info img').click(function(){
		$('.modal').show();
	});
	$('.modal .content button').click(function(){
		$('.modal').hide();
	});

	//slide
	start();

});