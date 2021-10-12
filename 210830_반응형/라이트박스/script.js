$(function(){
	var $block = $('#block');
	var $lightbox = $('#lightbox');
	var $indicator = $('.indicator button');

	function lightbox_open(i){
		$block.add($lightbox).addClass('active');
		$indicator.eq(i).focus();
		change_img(i);
	}
	function lightbox_close(){
		$block.add($lightbox).removeAttr('class');
		$('figure img').add($indicator).removeAttr('class');
	}
	function change_img(i){
		var $imgs = $('figure img');
		$imgs.add($indicator).removeAttr('class');
		$imgs.eq(i).attr('class','active');
		$indicator.eq(i).attr('class','active');
	}

	$('img.thumb').click(function(){
		var img_num = $(this).index()-1;
		lightbox_open(img_num);
	});

	$('.btn_close').click(function(){
		lightbox_close();
	});

	$indicator.click(function(){
		var btn_num = $(this).index();
		change_img(btn_num);
	});
});