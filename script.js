// hold the classes in variables
var text = document.querySelector(".question-here");
var answers = document.querySelector(".answer-here");
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

// array of all 5 questions that will be displayed
var questions = [
    {
        text: "What tag is used to create an interactive field for web-based forms that users can use to enter data?",
        answers: ["<input>", "<textarea>", "<form>", "<p>"],
        correct: "<input>"
    }, 
    
    {
        text: "Where does the 'link' element go inside of in the HTML document?",
        answers: ["<body>", "<header>", "<head>", "<footer>"],
        correct: "<head>"
    }, 

    {
        text: "What properties of flexbox can be used to sort all items to fit onto one line?",
        answers: ["flex-wrap", "flex-direction", "flex-flow", "flex-grow"],
        correct: "flex-wrap"
    }, 

    {
        text: "What element can be used in Javascript to store multiple items?",
        answers: ["string", "variable", "function", "array"],
        correct: "array"
    }, 

    {
        text: "What 4 components make up a box model?",
        answers: ["ruler, cardboard, tape, content", 
                  "order, border, padding, content", 
                  "margin, border, padding, content", 
                  "margin, box, padding, content"],
        correct: "margin, border, padding, content"
    }, 
]

// when user clicks on begin button, the game starts
startButton.addEventListener("click", function(event) {
    event.preventDefault();

    // timer will go off
    startTimer();
    startQuiz();

    // when button is clicked, it will hide the button
    startButton.style.display = "none";
    console.log("Clicked");
});

// function init() {
//     getScore();
// }

// once user click on begin, the timer starts and display first question
function startQuiz() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

   text.textContent = randomQuestion.text;

    randomQuestion.answers.forEach((answers, index) => {
        const answerElement = document.createElement("p");
    
        // Set the text content of the answer element
        answerElement.textContent = `${index + 1}. ${answers}`;
    });

    return randomQuestion.correct;
}

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

// function to hold the timer
function startTimer() {
    timerCount = 10;

    timer = setInterval(function() {
        timerCount--;
        time.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            console.log("end");
        } 
    }, 1000);
}
// function setScore() {
//     if ()
// }

