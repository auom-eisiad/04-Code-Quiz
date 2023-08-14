// Hold the classes in variables
var text = document.querySelector(".question-here");
var answers = document.querySelector(".answers");
var score = document.querySelector(".score");
var time = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-btn");
var restartButton = document.querySelector(".restart-btn");
var submitButton = document.querySelector(".submit-btn");
var name = document.getElementById("initial");

// Hold global variables 
var nextQuestion = 0;
var scoreCounter = 0;
var timer;
var timerCount;

// Array of all 5 questions that will be displayed
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

// When user clicks on begin button, the game starts
startButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Timer and Questions will go off
    startTimer();
    startQuiz();

    // When button is clicked, it will hide the button
    startButton.style.display = "none";
    console.log("Clicked");
});

// Once user click on begin, the timer starts and display first question with choices
function startQuiz() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
  
    // Display the question text
    text.textContent = randomQuestion.text;
  
    // Clear the answers container
    answersContainer.innerHTML = '';
  
    // Create a button element for each answer
    randomQuestion.answers.forEach((answer, index) => {
      const answerButton = document.createElement("button");
  
      // Set the text content of the answer button
      answerButton.textContent = `${answer}`;

      // Add a click event listener to the answer button
      answerButton.addEventListener("click", () => {
       
      });
  
      // Style the answer button
        answerButton.style.backgroundColor = "#018786";
        answerButton.style.color = "white";
        answerButton.style.fontSize = "20px";
        answerButton.style.padding = "10px 20px";
        answerButton.style.border = "none";
        answerButton.style.borderRadius = "10px";
        answerButton.style.cursor = "pointer";

      // Add a mouse enter event listener when mouse hover button
      answerButton.addEventListener("mouseenter", () => {
            
        // Style the button when mouse hover over
        answerButton.style.backgroundColor = "#03ac9b";
        answerButton.style.color = "white";
        answerButton.style.fontSize = "20px";
        answerButton.style.padding = "10px 20px";
        answerButton.style.border = "none";
        answerButton.style.borderRadius = "10px";
        answerButton.style.cursor = "pointer";
      });
      
      // Add a mouse leave event listener when mouse leave button
      answerButton.addEventListener("mouseleave", () => {

        // Style the button when mouse leave
        answerButton.style.backgroundColor = "#018786";
        answerButton.style.color = "white";
        answerButton.style.fontSize = "20px";
        answerButton.style.padding = "10px 20px";
        answerButton.style.border = "none";
        answerButton.style.borderRadius = "10px";
        answerButton.style.cursor = "pointer";
      });
  
      // Append the answer button to the answers container
      answersContainer.appendChild(answerButton);
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
    timerCount = 50;

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