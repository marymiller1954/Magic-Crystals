var correct=0; 
var incorrect=0; 
var unanswered=0;  
var timer;  
var time; //for timer
var question; 
var questions=[ 
	{
		question: "How old was Sheldon when he started college?", 
		choice1: "13",
		choice2: "11",
		choice3: "15", 
		choice4: "7",  
		triviaImage: "assets/images/sheldon.jpg", 
		answer: 2  
	},

	{
		question: "Where is Penny from?", 
		choice1:"Bellevue, Nebraska", 
		choice2:"Fremont, Nebraska",  
		choice3: "Omaha, Nebraska",  
		choice4:"Lincoln, Nebraska",  
		triviaImage: "assets/images/penny.jpeg", 
		answer: 3 

	},   

	{
		question: "How many languages, including Klingon, does Howard claim to speak?",  
		choice1:"4", 
		choice2:"8",  
		choice3: "2", 
		choice4:"6", 
		triviaImage: "assets/images/howard.jpg", 
		answer: 4
	},   

	{
		question: "What is the correct spelling of Raj's surname?", 
		choice1:"Koothrappalli", 
		choice2:"Koothrapali",
		choice3: "Koothrappali", 
		choice4:"Kothrappali", 
		triviaImage: "assets/images/raj.jpg", 
		answer: 3 
	},  

	{
		question: "Which university do Leonard, Sheldon, Howard and Raj work at?", 
		choice1:"Stanford", 
		choice2:"Caltech",
		choice3: "Berkley", 
		choice4:"UCLA",
		triviaImage: "assets/images/work.jpg",
		answer: 2 
	}  

];

function timerFunction(){
	if (question >= 0 && question < questions.length) { //are we on a valid question
		time--; 
		$(".timeCounter").show(); 
		$(".timeCounter").html('<h2>Timer: ' + time +'s</h2>'); 
		if (time <=0){ 
			unanswered++; 
			nextQuestion(); 
		} 
	} 
}; 

function gameOver(){
	$(".timeCounter").hide(); 
	$(".triviaImage").hide(); 
	$(".answers").hide(); 
	$(".triviaQuestion").hide(); 
	$("#restartGame").show(); 
	$("#correct").show(); 
	$("#incorrect").show(); 
	$("#unanswered").show(); 

	if(correct ===1) {
		$("#correct").html('<h2>You got ' + correct + " Question(s) Right!!</h2>");
	}else{ 
		$("#correct").html('<h2>You got ' + correct + " Question(s) Right!</h2>"); 
	}
	if(incorrect ===1) {
		$("#incorrect").html('<h2>You got ' + incorrect + " Question(s) Wrong!</h2>");
	}else{ 
		$("#incorrect").html('<h2>You got ' + incorrect + " Question(s) Wrong!</h2>"); 
	} 

	if(unanswered===1){
		$("#unanswered").html('<h2>' + unanswered + ' Questions Unanswered!</h2>'); 
	}else {
		$("#unanswered").html('<h2>' + unanswered + ' Question(s) Unanswered!</h2>'); 
	}
	
}; 

function checkAnswer(answer){
	if (questions[question].answer===answer){
		correct++; 
	}else {
		incorrect++; 
	} 
	nextQuestion(); 
}

function showQuestion(){ 
	time=15; 
	$(".timeCounter").show(); 
	$(".timeCounter").html('<h2>Timer: ' + time +'s</h2>');
	
	if (timer == null) {
		timer = setInterval(timerFunction, 1000);
	}else{
		clearInterval(timer); 
		timer= setInterval(timerFunction, 1000); 
	} 

	console.log(question); 
	$(".triviaQuestion").html("<h2> " + questions[question].question + "</h2>"); 
	$(".triviaImage").attr( 'src', questions[question].triviaImage); 
	$(".triviaImage").show();
	$(".answers").show();
	$(".triviaQuestion").show();   
	$("#button1").text(questions[question].choice1); 
	$("#button2").text(questions[question].choice2); 
	$("#button3").text(questions[question].choice3); 
	$("#button4").text(questions[question].choice4);


}; 
function restartGame(){
		question=-1; 
		nextQuestion();
		correct=0; 
		incorrect=0; 
		unanswered=0;
		$("#restartGame").hide(); 
		$("#correct").hide(); 
		$("#incorrect").hide(); 
		$("#unanswered").hide();  

}; 

$(document).ready (function() {
	$("#button1").on("click", function(){ 
		checkAnswer(1); 
	}); 
	$("#button2").on("click", function(){ 
		checkAnswer(2); 
	}); 
	$("#button3").on("click", function(){ 
		checkAnswer(3); 
	}); 
	$("#button4").on("click", function(){ 
		checkAnswer(4); 
	}); 

	$('#restartGame').on("click", function(){	
	restartGame(); 
	}); 
	$('.triviaImage').hide(); 
	$('.answers').hide(); 
	$("#restartGame").hide(); 
	$('#startGame').on('click', function(){
	$('#startGame').hide(); 
	$('#gameDirections').hide();
		restartGame(); 
	});  
});

function nextQuestion(){
	question++;   
	if(question==questions.length){
		gameOver(); 
	} else {
		showQuestion();

	}
}; 





// }; 


