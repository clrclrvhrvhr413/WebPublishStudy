function calendar(new_year,new_month){
	var d = new Date(new_year,new_month-1,1);
	var d_len = new Date(new_year,new_month,0).getDate();

	var year = d.getFullYear();
	var month = d.getMonth()+1;
	var date = d.getDate();
	var day = d.getDay();

	var start = document.querySelectorAll('tr td');
	var cap_year = document.querySelector('.year');
	var cap_month = document.querySelector('.month');

	cap_year.innerHTML=year;
	cap_month.innerHTML=month;

	for(var i in start){
		start[i].innerHTML='&nbsp;';

	}
	for(var i=day;i<d_len+day;i++){
		start[i].innerHTML=date++;
	}
}
(function(){
	//익명함수 즉시 실행
	var prev = document.getElementById('prev'),
		next = document.getElementById('next'),
		year = new Date().getFullYear(),
		month = new Date().getMonth()+1;
	
	calendar(year,month);
	prev.onclick=function(){
		calendar(year,--month);
	};
	next.onclick=function(){
		calendar(year,++month);
	};
})();
