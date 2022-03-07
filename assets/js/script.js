var highScoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("timer-count");
var mainEl = document.getElementById("main");
var btn = document.querySelector("button");

var javascriptQuestions = [
  {
      question: "Who invented Javascript?",
      answers: {
          a: "Steve Jobs",
          b: "Bill Gates",
          c: "Brendan Eich",
          d: "Linus Torvalds"
      },
      correctAnswer: "c"
  },  
  {
    question: "Which of these is NOT a data type in Javascript?",
    answers: {
        a: "string",
        b: "text",
        c: "number",
        d: "object"
    },
    correctAnswer: "b"
  },
  {
      question: "What do you use to set off items in an array?",
      answers: {
          a: "square brackets",
          b: "curly brackets",
          c: "parentheses",
          d: "semi-colons"
      },
      correctAnswer: "a"
  },
  {
      question: "Given Math.ceil(4.1), what will be the result?",
      answers: {
          a: "4.1",
          b: "4",
          c: "0",
          d: "5"
  },
  correctAnswer: "d"
},
  {
        question: "What is the purpose of a switch statement?",
        answers: {
            a: "to turn an animation on or off",
            b: "to perform different actions based on different conditions",
            c: "to change the default setting of localStorage",
            d: "to return a text string in lowercase"
        },
        correctAnswer: "b"
  },
  {
      question: "What is 'hoisting' in Javascript?",
      answers: {
          a: "Javascript's default behavior of moving declarations to the top",
          b: "Javascript's behaior of compatibility with older web browsers",
          c: "Javascript's ability to customize animations",
          d: "Javascript's way of lifting errors for rapid debugging"
      },
      correctAnswerr : "a"
  },
  
  {
      question: "To what does 'this' refer when it is used alone?", 
      answers: {
        a: "the global object",
        b: "the most recently named variable",
        c: "the most recently called function",
        d: "the object directly following 'this'"
      },
      correctAnswer: "a"
  },

  {
  question: "What is the purpose of a 'while' loop?",
    answers: {
        a: "to create a countdown while waiting for a response",
        b: "to write information to sessionStorage",
        c: "to invoke a callback of a previously used function",
        d: "to loop through a block of code as long as a specified condition exists"
    },
    correctAnswer: "d"
},
{
question: "What is used to set off the code to executed in a function?", 
    answers: {
        a: "parentheses",
        b: "commas",
        c: "curly brackets",
        d: "square brackets"
    },
    correctAnswer: "c"
},
{
question: "What word is NOT reserved in Javascript?",
    answers: {
        a: "true",
        b: "break",
        c: "car",
        d: "debugger"

    },
    correctAnswer: "c"
},

]

function highscore () {
    if (timeLeft > 0) {
        highScoreEl = "Your score is " + timeLeft;
    }
}

var startBtnEl = document.createElement("button");
startBtnEl.innerHTML = "Click to Begin"
button.appendChild(startBtnEl);

mainEl.textContent = "Javascript Code Quiz!"


function quiz () {
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

}
function buildQuiz() {
    mainEl.textContent = javascriptQuestions[0];
}



var startGame = document.getElementById("button")
 startGame.addEventListener("click", quiz);

