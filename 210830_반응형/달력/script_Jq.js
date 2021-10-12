$(function(){
	function calendar(new_year,new_month) {
		var d = new Date(new_year,new_month-1,1);	//년월일 지정
		
		var d_len = new Date(new_year,new_month,0).getDate();
		/**new Date(2021,2,1) => 2021-03-01
		 *  보통 date를 입력하면 다음달의 날짜로 나오고,
		 * 
		 * new Date(2021,2,0) => 2021-02-28
		 *  0을 넣으면 현재달의 마지막날이 나오고,
		 * 
		 * new Date(2021,2,32)=> 2021-04-01
		 *  다음달의 날짜를 지나는 date를 입력하면 초과하는 만큼 그 다음으로 넘어감 (3월 31+1 => 4월1일)
		 * 
		 * 와 이거 윤년도 해결됨*/
		console.log(new Date(2021,2,32));

		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var date = d.getDate();
		var day = d.getDay(); //일요일부터 index 0
		
		var $cap_year = $('.year');
		var $cap_mon = $('.month');
		var $start_day = $('tr td');

		$cap_year.text(year);
		$cap_mon.text(month);

		$start_day.html('&nbsp;');
		// $start_day.each(function(i){$(this).html('&nbsp;');})
		for(var i=day;i<d_len+day;i++){
			$start_day.eq(i).html(date++);
		}

	}

	(function(){
		//익명함수 즉시 실행
		var $prev = $('#prev'),
			$next = $('#next'),
			year = new Date().getFullYear(),
			month = new Date().getMonth()+1;
		
		calendar(year,month);

		$prev.click(function(){
			calendar(year,--month);
		});
		$next.click(function(){
			calendar(year,++month);
		});
	})();
});