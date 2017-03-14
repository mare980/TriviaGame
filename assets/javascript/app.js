var beginGame;
var gameHTML;
var counter = 30;
var questionArray = ["How many miles is the Chicago Marathon?", "The 2016 Chicago Cubs won their first World Series in how many years?", "What year did the Chicago Bears win their only Super Bowl?", "What movie did Jared Leto win an Oscar for best supporting actor?", "What year was the first iPhone released?"];
var answerArray = [["25.2", "27.2", "23.3", "26.2"], ["103", "102", "108", "106"], ["1986", "1985", "1988", "1982"], ["Chapter 27", "Mr. Nobody", "Dallas Buyers Club", "Alexander"], ["2006", "2007", "2004", "2008"]];
var correctAnswers = ["D. 26.2", "C. 108", "A. 1986", "C. Dallas Buyers Club", "B. 2007"];
var playerAnswer;
var theClock;




$(document).ready(function() {

function initialScreen() {
	beginGame = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Begin Game!</a></p>";
	$(".mainArea").html(beginGame);
}

initialScreen();


$("body").on("click", ".start-button", function(event){

	generateHTML();

	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
	;
	playerAnswer = $(this).text();
	if(playerAnswer === correctAnswers[questionCounter]) {

		
		generateWin();
	}
	else {
		
		generateLoss();
	}
});

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 
});  



function generateHTML() {
	triviaHTML = [questionArray[questionCounter] + answerArray[questionCounter][0];
	$(".mainArea").html(triviaHTML);
}

function wait() {
	if (questionCounter < 4) {
	questionCounter++;
	generateHTML();
	counter = 120;
	timerWrapper();
	}
	else {
		finalScreen();
	}
