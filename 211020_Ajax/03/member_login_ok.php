<?php
	// isset(var) 변수 설정 여부 확인
	if(!isset($_POST['user_id']) || !isset($_POST['user_pw']) ) exit;

	$user_id = $_POST['user_id'];
	$user_pw = $_POST['user_pw'];

	$members = array(
		'korean'=>array('pw'=>'1234','name'=>'홍길동'),
		'seoul'=>array('pw'=>'9876','name'=>'이순신')
	);

	if (isset($members[$user_id]) && $members[$user_id]['pw']===$user_pw) {
		echo "{'user_id':'".$user_id."',
				'user_name':'".$members[$user_id]['name']."'}";
	}
?>