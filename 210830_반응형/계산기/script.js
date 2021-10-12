var inp = document.forms['cal'];
var input = inp.getElementsByTagName('input');
var clr_btn = document.getElementsByClassName('clr_btn')[0];
var result_btn = document.getElementsByClassName('result_btn')[0];




function clr(){
	inp['result'].value=0;
}
function calc(value){
	if (inp['result'].value == 0 || inp['result'].value == 'ERROR') {
		inp['result'].value = '';
	}	
	inp['result'].value += value;
}
function my_result(){
	var result = inp['result'];
	var calc = eval(result.value); //문자식이 숫자로 변환하여 연산이 됨
	inp['result'].value=calc;
}




for(var i=0;i<input.length;i++){
	// if(input[i].value == '='){
	// 	input[i].onclick = function(){
	// 		 my_result();
	// 	}
	// }
	// else if(input[i].value == 'clear'){
	// 	input[i].onclick = function(){
	// 		 clr();
	// 	}
	// }
	// else {
	// 	input[i].onclick = function(){
	// 		calc(this.value);
	// 	}
	// }
	if ((input[i].value == '=')&&(input[i].value == 'clear')) {
		input[i].onclick = function(){
			calc(this.value);
		}
	}
}


clr_btn.onclick = function(){
	clr();
}
result_btn.onclick = function(){
	try{
		my_result();
	}
	catch(err){
		var result = inp['result'];
		result.value= 'ERROR';
	}
}