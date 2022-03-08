var highScoreEl = document.getElementById("highscore");
var timerEl = document.getElementById("timer-count");
var mainEl = document.getElementById("main");
var btn = document.querySelector("button");
var instructEl = document.getElementById("instructions");
var ansBtn1 = document.getElementById("answerbtn1");
var ansBtn2 = document.getElementById("answerbtn2");
var ansBtn3 = document.getElementById("answerbtn3");
var ansBtn4 = document.getElementById("answerbtn4");


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

function highscore () {
    if (timeLeft > 0) {
        highScoreEl = "Your score is " + timeLeft;
    }
}

var startBtnEl = document.createElement("button");
startBtnEl.innerHTML = "Click to Begin"
button.appendChild(startBtnEl);

mainEl.textContent = "Javascript Code Quiz!"
instructEl.textContent = "When you begin the quiz, you will have two minutes to answer ten questions about Javascript. Your score will equal the time remaining. If you submit an incorrect response, ten seconds will be deducted from the time remaining. Afterwards you can check your score against the high score. Have fun!"


function quiz () {
    instructEl.textContent = "";
    removeStartBtn();
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

    for (var i = 0; i < javascriptQuestions.length; i++) {
    mainEl.innerHTML = javascriptQuestions[i].question;

    
    
    var ansBtn1 = document.createElement("button");
    var ansBtn2 = document.createElement("button");
    var ansBtn3 = document.createElement("button");
    var ansBtn4 = document.createElement("button");

    for (var i = 0; i < javascriptQuestions.length; i++)
    ansBtn1.textContent = javascriptQuestions[i].a;
    for (var i = 0; i < javascriptQuestions.length; i++)
    ansBtn2.textContent = javascriptQuestions[i].b;
    for (var i = 0; i < javascriptQuestions.length; i++)
    ansBtn3.textContent = javascriptQuestions[i].c;
    for (var i = 0; i < javascriptQuestions.length; i++)
    ansBtn4.textContent = javascriptQuestions[i].d;

    answerbtn1.appendChild(ansBtn1);
    answerbtn2.appendChild(ansBtn2);
    answerbtn3.appendChild(ansBtn3);
    answerbtn4.appendChild(ansBtn4);
}
}



var startGame = document.getElementById("button")
 startGame.addEventListener("click", quiz);

