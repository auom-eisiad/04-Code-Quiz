// Hold the classes in variables
var text = document.querySelector(".question-here");
var answers = document.querySelector(".answers");
var score = document.querySelector(".score");
var time = document.querySelector(".timer-count");
var scoring = document.querySelector(".scoring");
var startButton = document.querySelector(".start-btn");

// Hold global variables 
var currentQuestionIndex = 0;
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
];

// When user clicks on begin button, the game starts
startButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Timer and Questions will go off
    startTimer();
    startQuiz();

    // When button is clicked, it will hide the button
    startButton.classList.add("hidden");
});

// Shuffle the questions array inspired from the Fisher-Yates shuffle
function shuffleQuestions(arr) {

    // Start from the last index of the array and swap one by one
    for (let i = arr.length - 1; i > 0; i--) {
    
      // Pick a random index in the array from 0 to i
      const randomIndex = Math.floor(Math.random() * (i + 1));

      // Swap the arr[i] and arr[randomIndex] vice versa at random
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
}
   
// Randomize the order of the questions
shuffleQuestions(questions);

// Once user click on begin, the timer starts and display first question with choices
function startQuiz() {

    // display the question progress completed so far
    let currentQuestion = currentQuestionIndex + 1;
    document.querySelector(".questionNumber").innerText = currentQuestion;
    
    // Retrieve the current question from the questions arry
    const currentQuestionData = questions[currentQuestionIndex];
  
    // Display the question and current question index text
    text.textContent = currentQuestionData.text;
  
    // Clear the answers container
    answersContainer.innerHTML = '';
  
    // Iterate each element in the answers array of the current question data 
    currentQuestionData.answers.forEach((answer, index) => {

      // Create a button element for each answer
      const answerButton = document.createElement("button");
  
      // Set the text content of the answer button
      answerButton.textContent = `${answer}`;

      // Add a click event listener to the answer button
      answerButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Check if the selected answer is correct or not. Otherwise, time will be deducted.
        if (answerButton.textContent === currentQuestionData.correct) {
            let card = document.querySelector(".box");
            card.style.backgroundColor = "#8bc584";
            
            // Set a time for how long background color change before going back to original color
            setTimeout(() => {
                card.style.backgroundColor = "";
            }, 500); 

            // When the answer is correct, add 20 points to score
            scoreCounter += 20;
            scoring.textContent = scoreCounter;

            // Store the score in local storage
            localStorage.setItem("scoreCounter", scoreCounter); 
        } 
        else {
            let card = document.querySelector(".box");
            card.style.backgroundColor = "#f17171";

            setTimeout(() => {
                card.style.backgroundColor = ""; 
            }, 500);

            // Deduct points if answered wrong
            timerCount -= 10;
        }

        // Move to next question
        nextQuestion();
        
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
  
    return currentQuestionData.correct;
}

// Function to move to the next question
function nextQuestion() {
    // Increment the current question index
    currentQuestionIndex++;
  
    // Check if there are more questions available
    if (currentQuestionIndex < questions.length) {
      // Move to the next question
      startQuiz();
    } else {
      gameOver();
    }
}

// function to hold the timer
function startTimer() {
    
    // Give a timer of 50 seconds
    timerCount = 50;

    // set an interval counting down by 1 second and if reach 0, return to 0 and run gameOver function
    timer = setInterval(function() {
        timerCount--;
        time.textContent = Math.max(timerCount, 0);
        if (timerCount <= 0) {
            clearInterval(timer);
            timerCount = 0;
            gameOver();
        } 
    }, 1000);
}

function storeScore() {
    // Retrieve the score from local storage
    scoreCounter = localStorage.getItem("scoreCounter"); 
    document.getElementById("total-score").textContent = `${scoreCounter}`;
}

function gameOver() {
    // If all questions are answered, display timer back to 0
    timerCount = 0;

    // hide quiz and reveal scoreboard 
    document.getElementById("scoreboard").classList.remove("hidden"); 
    document.getElementById("submit-btn").classList.remove("hidden"); 
    document.getElementById("boxIt").classList.add("hidden");

    storeScore();
}

// Declare the restart button
var restartButton = document.getElementById("restart-btn");

// Give the restart button a click event to restart the game
restartButton.addEventListener("click", function() {
    restartGame();
});

// Restart the game to play again
function restartGame() {
    // Reset the score to 0
    scoreCounter = 0;
    document.querySelector(".scoring").innerHTML = `0`;

    //  // Hide the highscore and restart button
    document.getElementById("highscore").classList.add("hidden");
    document.getElementById("restart-btn").classList.add("hidden");

    document.getElementById("scoreboard").classList.add("hidden");
    document.getElementById("submit-btn").classList.add("hidden"); 

    // // Display the front page of the quiz
    document.getElementById("boxIt").classList.remove("hidden"); 

    document.querySelector(".question-here").innerHTML = `Press the "Begin" button to start!`;
    document.querySelector(".answers").innerHTML = "";

    // // display start button to play
    startButton.classList.remove("hidden"); 

    // Set back to 0
    currentQuestionIndex = 0;

    // // Call back all functions
    shuffleQuestions(questions);
}

// Store the submit button in a variable to call on
var submitButton = document.getElementById("submit-btn");

// When user click the submit button, retrieve and store the user's input
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Retrieve the user's initials and save its value
    var initialInput = document.getElementById("initial");
    var initials = initialInput.value;
    
    // Retrieve the initials and score and if true, parse it but if there is more, it will join it into an array
    var highscore = localStorage.getItem("highscores");
    if (highscore) {
        var parseScore = JSON.parse(highscore);
        parseScore.push({initials: initials, score: scoreCounter});
        localStorage.setItem("highscores", JSON.stringify(parseScore));
    }
    else {
        // Set an empty array to allow storing multiples
        let scoreArr = [];
        scoreArr.push({initials: initials, score: scoreCounter});

        // Store the highscore and stringify it with the score array
        localStorage.setItem("highscores", JSON.stringify(scoreArr)); 
    }
    
    // Give the class "hidden" back to hide scoreboard
    document.getElementById("scoreboard").classList.add("hidden");
    document.getElementById("submit-btn").classList.add("hidden"); 

    // Remove the hidden class and display highscore
    document.getElementById("highscore").classList.remove("hidden"); 
    document.getElementById("restart-btn").classList.remove("hidden"); 

     // Clear the winners before appending
    winners.innerHTML = "";

    // Display the high score and add on the array
    var arrayHighScores = JSON.parse(localStorage.getItem("highscores"));
    for (let i = 0; i < arrayHighScores.length; i++) {
        var listScore = document.createElement("li");
        listScore.textContent = `${arrayHighScores[i].initials} : ${arrayHighScores[i].score}`;
        
        listScore.classList.add("scoreList");

        var wins = document.getElementById("winners");
        wins.append(listScore);
    }
});