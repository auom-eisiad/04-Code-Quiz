// hold the classes in variables
var text = document.querySelector(".question-here");
var score = document.querySelector(".score");
var time = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-btn");
var restartButton = document.querySelector(".restart-btn");
var submitButton = document.querySelector(".submit-btn");
var name = document.getElementById("initial");

// hold global variables 
var userChoice;
var scoreCounter = 0;
var timer;
var timerCount;

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startTimer();
    console.log("Clicked");
});

// function init() {
//     getScore();
// }

// function startQuiz() {
//     timerCount = 10;
//     startButton.disabled = true;
//     startTimer();
// }

// function correctAnswer() {
//     text.textContent = "Correct!";
//     scoreCounter++
//     startButton.disabled = false;
//     setScore()
// }

// function incorrectAnswer() {
//     text.textContent = "Incorrect!";
//     scoreCounter--
//     startButton.disabled = false;
//     setScore()
// }

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        time.textContent = timerCount;
        if (timerCount <= 0) {
            console.log("end");
        } 
    }, 1000);
}

// function setScore() {
//     if ()
// }