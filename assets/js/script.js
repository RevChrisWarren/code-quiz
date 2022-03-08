var highScoreEl = document.getElementById("highscore");
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
      correctAnswerr : "a"
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
question: "What is used to set off the code to executed in a function?", 
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

var startBtnEl = document.createElement("button");
startBtnEl.innerHTML = "Click to Begin"
button.appendChild(startBtnEl);

mainEl.textContent = "Javascript Code Quiz!"
instructEl.textContent = "When you begin the quiz, you will have two minutes to answer ten questions about Javascript. Your score will equal the time remaining. If you submit an incorrect response, ten seconds will be deducted from the time remaining. Afterwards you can check your score against the high score. Have fun!"


function quiz () {
    instructEl.textContent = "";
    removeStartBtn();
    buildQuiz(questionNumber);

    var timeLeft = 120;
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
        displayMessage();
    }
    
}, 1000);

function removeStartBtn() {
    var elem = document.getElementById('button');
    elem.parentNode.removeChild(elem);
    return false;

}
}
function buildQuiz() {

    var ansBtn1 = document.createElement("button");
    var ansBtn2 = document.createElement("button");
    var ansBtn3 = document.createElement("button");
    var ansBtn4 = document.createElement("button");
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
var corAnswer = javascriptQuestions[questionNumber].correctAnswer;
function checkAnswer(event) {
   
    if (event.target.getAttribute("data-answer") === corAnswer) {
        corAns.textContent = "Correct!";
        incorAns.textContent = ""
        } else if (event.target.getAttribute("data-answer") != corAnswer) {
        corAns.textContent = "";
        incorAns.textContent = "Sorry, wrong answer. Subtracting ten seconds from time remaining."
        timerEl -= 10
        } else {
        alert("There has been an error. Please reload page and try again.")
    }
    removeButtons();
    nextQuestion();
}
function removeButtons () {
    var elem1 = document.getElementById("answerbtn1", "answerbtn2", "answerbtn3", "answerbtn4");
    elem1.parentNode.removeChild(elem1);
    return false;
    

}

function nextQuestion() {
        if (questionNumber < javascriptQuestions.length) {
            questionNumber = questionNumber + 1;
            buildQuiz();
        } else if (questionNumber = questionNumber.length) {
            endGame();
        } else  {
        alert("There has been an error. Please reload page and try again.");
    }

    console.log(event.target);
    console.log(corAnswer);
    console.log(event.target.getAttribute("data-answer"));
  
}

function endGame () {
    alert("Your score is " + timeLeft);

}
function highscore () {
    if (timeLeft > 0) {
        highScoreEl = "Your score is " + timeLeft;
    }
}



var startGame = document.getElementById("button")
 startGame.addEventListener("click", quiz);

