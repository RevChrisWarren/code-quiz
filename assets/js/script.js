var highScoreEl = document.getElementById("highscore-show");
var timerEl = document.getElementById("timer-count");
var mainEl = document.getElementById("main");
var btn = document.querySelector("button");
var instructEl = document.getElementById("instructions");
var ansBtn1 = document.getElementById("answerbtn1");
var ansBtn2 = document.getElementById("answerbtn2");
var ansBtn3 = document.getElementById("answerbtn3");
var ansBtn4 = document.getElementById("answerbtn4");
var questionNumber = 0;
var corAns = document.getElementById("feedback-correct");
var incorAns = document.getElementById("feedback-incorrect");
var score = 0;
var highScore = localStorage.getItem("highscore");
var hsInitials = localStorage.getItem("initials");

// create array to store questions and answers
var javascriptQuestions = [
  {
      question: "Who invented Javascript?",
      
          a: "Steve Jobs",
          b: "Bill Gates",
          c: "Brendan Eich",
          d: "Linus Torvalds",
      
      correctAnswer: "c"
  },  
  {
    question: "Which of these is NOT a data type in Javascript?",
        a: "string",
        b: "text",
        c: "number",
        d: "object",
    correctAnswer: "b"
  },
  {
      question: "What do you use to set off items in an array?",
          a: "square brackets",
          b: "curly brackets",
          c: "parentheses",
          d: "semi-colons",
      correctAnswer: "a"
  },
  {
      question: "Given Math.ceil(4.1), what will be the result?",
          a: "4.1",
          b: "4",
          c: "0",
          d: "5",
  correctAnswer: "d"
},
  {
        question: "What is the purpose of a switch statement?",
            a: "to turn an animation on or off",
            b: "to perform different actions based on different conditions",
            c: "to change the default setting of localStorage",
            d: "to return a text string in lowercase",
        correctAnswer: "b"
  },
  {
      question: "What is 'hoisting' in Javascript?",
          a: "Javascript's default behavior of moving declarations to the top",
          b: "Javascript's behaior of compatibility with older web browsers",
          c: "Javascript's ability to customize animations",
          d: "Javascript's way of lifting errors for rapid debugging",
      correctAnswer : "a"
  },
  
  {
      question: "To what does 'this' refer when it is used alone?", 
        a: "the global object",
        b: "the most recently named variable",
        c: "the most recently called function",
        d: "the object directly following 'this'",
      correctAnswer: "a"
  },

  {
  question: "What is the purpose of a 'while' loop?",
        a: "to create a countdown while waiting for a response",
        b: "to write information to sessionStorage",
        c: "to invoke a callback of a previously used function",
        d: "to loop through a block of code as long as a specified condition exists",
    correctAnswer: "d"
},
{
question: "What is used to set off the code to be executed in a function?", 
        a: "parentheses",
        b: "commas",
        c: "curly brackets",
        d: "square brackets",
    correctAnswer: "c"
},
{
question: "What word is NOT reserved in Javascript?",
        a: "true",
        b: "break",
        c: "car",
        d: "debugger",
    correctAnswer: "c"
},
]

// create and style a button that starts the game
var startBtnEl = document.createElement("button");
startBtnEl.innerHTML = "Click to Begin"
startBtnEl.style.padding = "20px";
startBtnEl.style.backgroundColor = "green";
startBtnEl.style.color = "white";
button.appendChild(startBtnEl);

// Greet the quiz taker and give instructions
mainEl.textContent = "Javascript Code Quiz!"
instructEl.textContent = "When you begin the quiz, you will have two minutes to answer ten questions about Javascript. Your score will equal the time remaining. If you submit an incorrect response, ten seconds will be deducted from the time remaining. Afterwards you can check your score against the high score. Have fun!"

// set the time and get quiz going
var timeLeft = 120;
function quiz () {
    instructEl.textContent = "";
    removeStartBtn();
    buildQuiz(questionNumber);

 // set interval for the countdown and end game if count ends
var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
        timerEl.textContent = timeLeft + " seconds remaining.";
        timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + " second remaining.";
        timeLeft--;
    } else {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        clearScreen();
    }
    
}, 1000);

//clear the opening page elements for the quiz to begin
function removeStartBtn() {
    var elem = document.getElementById('button');
    elem.parentNode.removeChild(elem);
    return false;

}
}
//create and loop through quiz questions
function buildQuiz() {
    removeButtons();
    

    var ansBtn1 = document.createElement("button");
    ansBtn1.style.backgroundColor = "blue";
    ansBtn1.style.color = "white";
    ansBtn1.style.padding = "15px";
    ansBtn1.style.margin = "10px";
    var ansBtn2 = document.createElement("button");
    ansBtn2.style.backgroundColor = "blue";
    ansBtn2.style.color = "white";
    ansBtn2.style.padding = "15px";
    ansBtn2.style.margin = "10px";
    var ansBtn3 = document.createElement("button");
    ansBtn3.style.backgroundColor = "blue";
    ansBtn3.style.color = "white";
    ansBtn3.style.padding = "15px";
    ansBtn3.style.margin = "10px";
    var ansBtn4 = document.createElement("button");
    ansBtn4.style.backgroundColor = "blue";
    ansBtn4.style.color = "white";
    ansBtn4.style.padding = "15px";
    ansBtn4.style.margin = "10px";
    mainEl.innerHTML = javascriptQuestions[questionNumber].question;
   
    ansBtn1.textContent = javascriptQuestions[questionNumber].a;
    ansBtn2.textContent = javascriptQuestions[questionNumber].b;
    ansBtn3.textContent = javascriptQuestions[questionNumber].c;
    ansBtn4.textContent = javascriptQuestions[questionNumber].d;

    answerbtn1.appendChild(ansBtn1);
    answerbtn2.appendChild(ansBtn2);
    answerbtn3.appendChild(ansBtn3);
    answerbtn4.appendChild(ansBtn4);

    ansBtn1.dataset.answer = "a";
    ansBtn2.dataset.answer = "b";
    ansBtn3.dataset.answer = "c";
    ansBtn4.dataset.answer = "d";

    ansBtn1.addEventListener("click", checkAnswer);    
    ansBtn2.addEventListener("click", checkAnswer);
    ansBtn3.addEventListener("click", checkAnswer);
    ansBtn4.addEventListener("click", checkAnswer);

}
    // give feedback about whether the question answers are correct or not
function checkAnswer(event) {
    var corAnswer = javascriptQuestions[questionNumber].correctAnswer;
    if (event.target.getAttribute("data-answer") === corAnswer) {
        corAns.textContent = "Correct!";
        incorAns.textContent = ""
        } else if (event.target.getAttribute("data-answer") != corAnswer) {
        corAns.textContent = "";
        incorAns.textContent = "Sorry, wrong answer. Subtracting ten seconds from time remaining.";
        timeLeft = timeLeft-10;
        }  else {
        alert("There has been an error. Please reload page and try again.")
    }
   
    nextQuestion();
}
//remove previously made buttons before creating the new ones for each question
function removeButtons () {
    ansBtn1.textContent = "";
    ansBtn2.textContent = "";
    ansBtn3.textContent = "";
    ansBtn4.textContent = "";

}
// move through the array to the next question
function nextQuestion() {
        if (questionNumber < javascriptQuestions.length - 1) {
            questionNumber = questionNumber + 1;
            buildQuiz();
        } else if (questionNumber = javascriptQuestions.length -1) {
            clearScreen();
        } else  {
        alert("There has been an error. Please reload page and try again.");
    }
  
}
// give feedback score and capture initials if highscore
function endGame () {
    alert("Your score is " + timeLeft);
    if (timeLeft > highScore) {
        highScore = timeLeft;
    localStorage.setItem("highscore", highScore)
    clearInterval();
     highscoreshow();
    } else {
        alert("Thank you for playing!");
        playAgain();
    
    } 
}

//clear the screen at the end of the game
function clearScreen() {
    clearInterval();
    timerEl.remove();
    ansBtn1.textContent = "";
    ansBtn2.textContent = "";
    ansBtn3.textContent = "";
    ansBtn4.textContent = "";
    startBtnEl.innerHTML = "";
    mainEl.innerHTML = "";
    corAns.textContent = "";
    incorAns.textContent = "";
    endGame();
}

// use alerts to show the scores and invite the player to play again
function highscoreshow() {
    hsInitials = window.prompt("You have the high score! Insert your initials here");
    localStorage.setItem("initials", hsInitials);
    alert("The High Score is " + highScore + " set by " + hsInitials);
    playAgain();
}
 function showhighscore() {
    alert("The High Score is " + highScore + " set by " + hsInitials);
 }

function playAgain() {
   if (confirm("Would you like to play again?")) {   
       location.reload();
    } else {
        alert("Come back and play again!");
}
}
var startGame = document.getElementById("button")
    startGame.addEventListener("click", quiz);
    highScoreEl.addEventListener("click", showhighscore)
