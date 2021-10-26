const quiz_text = document.getElementById('quiz'),
	btn = document.querySelectorAll('.btn');

function Question(text,choice,answer){
	this.text = text;
	this.choice = choice;
	this.answer = answer;
}
function Quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}
function update_quiz(){
	var question = document.getElementById('question');
	// var btn = document.querySelectorAll('.btn');
	var idx = quiz.questionIndex+1;

	question.innerHTML = `문제${idx}) ${quiz.questions[quiz.questionIndex].text}`;
	for(var i=0;i<btn.length;i++){
		btn[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
	}
}
function progress(){
	var progress = document.getElementById('progress');
	progress.innerHTML = `문제 ${quiz.questionIndex+1}/${questions.length}`
}
Quiz.prototype.correctAnswer = function(answer){
	return answer === this.questions[this.questionIndex].answer
}
function checkAnswer(i){
	btn[i].addEventListener('click',function(){
		var answer = btn[i].innerText;
		if(quiz.correctAnswer(answer)) {
			alert('정답입니다.');
			quiz.score++;
		}
		else {alert('틀렸습니다.')}
	
		quiz.questionIndex++;
		progress();
		update_quiz();
	})
}

var questions = [
	new Question('다음 중 최초의 상용 웹 브라우저는?',
		['모자이크','인터넷익스플로러','크롬','넷스케이프 네비게이터'],'넷스케이프 네비게이터'),
	new Question('웹 문서에서 스타일을 작성하는 언어는?',
		['html','jquery','css','xml'],'css'),
	new Question('명령어 기반의 인터페이스를 의미하는 용어는?',
		['gui','cli','hud','si'],'cli'),
	new Question('css속성 중 글자의 굵기를 변경하는 속성은?',
		['font-style','font-weight','font-size','font-variant'],'font-weight')
];
var quiz = new Quiz(questions);

for(var i=0;i<btn.length;i++){
	checkAnswer(i)
}
update_quiz();
progress();
