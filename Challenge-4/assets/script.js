var startSectionEl = document.querySelector("#start");

var startButtonEl = document.querySelector("#startbtn");

var timeLeftEl = document.querySelector("#timer");
var time = 60;
var questionsSectionEl = document.querySelector("#questions-section");
var questionNumber = 0;
var nextButtonEl = document.querySelector("#next");
var resultEl = document.querySelector("#result")


var questions = [
  {
    question:
      "What operator is used to assign a value to a declared variable?",
    option1: "Colon (:)",
    option2: "Equal sign (=)",
    option3: "Double-equal (==)",
    option4: "Question mark (?)",
    correct: 2,
  },
  {
    question: "What are the six primitive data types in JavaScript?",
    option1: "sentence, int, truthy, bigInt, symbol, undefined",
    option2: "string, number, boolean, bigInt, symbol, undefined",
    option3: "string, num, falsy, bigInt, symbol, undefined",
    option4: "sentence, float, data, bigInt, symbol, undefined",
    correct: 2,
  },
  {
    question: "What is the difference between && and ||?",
    option1:
      "The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",
    option2:
      "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
    option3:
      "The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions return true true.",
    option4:
      "The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
    correct: 2,
  },
  {
    question: "How do we declare a conditional statement in JavaScript?",
    option1: "Colon (:)",
    option2: "Equal sign (=)",
    option3: "Double-equal (==)",
    option4: "Question mark (?)",
    correct: 2,
  },
  {
    question:
      "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
    option1: "Colon (:)",
    option2: "Equal sign (=)",
    option3: "Double-equal (==)",
    option4: "Question mark (?)",
    correct: 2,
  },
];

var timeCountdown = function () {
  var timeInterval = setInterval(function () {
    timeLeftEl.textContent = time;
    time--;
  }, 1000);
};

//When the button is clicked this function is called to start the timer and display the questions
function startQuiz() {
  startSectionEl.remove();

  timeCountdown();

  displayQuestion(questionNumber);
}



var displayQuestion = function (questionIndex) {
  var questionHeadingEl = document.createElement("h1");
  var optionsDivEl = document.createElement("div");
  var questionOptionEl = document.createElement("button");

  var questionDivEl = document.createElement("div");

  questionDivEl.className = "question";
  questionsSectionEl.append(questionDivEl);

  questionHeadingEl.textContent = questions[questionIndex].question;
  
  questionDivEl.append(questionHeadingEl);


  questionDivEl.appendChild(optionsDivEl);

  questionOptionEl = document.createElement("button");
  questionOptionEl.className = "options options1";
  questionOptionEl.textContent = questions[questionIndex].option1;
  if (questions[questionIndex].correct === 1) {
    questionOptionEl.setAttribute("id", "correct");
  } else {
    questionOptionEl.addClassName = "incorrect";
  }
  optionsDivEl.appendChild(questionOptionEl);

  questionOptionEl = document.createElement("button");
  questionOptionEl.className = "options option2";
  questionOptionEl.textContent = questions[questionIndex].option2;
  if (questions[questionIndex].correct === 2) {
    questionOptionEl.setAttribute("id", "correct");
  } else {
    questionOptionEl.addClassName = "incorrect";
  }
  optionsDivEl.appendChild(questionOptionEl);

  questionOptionEl = document.createElement("button");
  questionOptionEl.className = "options option3";
  questionOptionEl.textContent = questions[questionIndex].option3;
  if (questions[questionIndex].correct === 3) {
    questionOptionEl.setAttribute("id", "correct");
  } else {
    questionOptionEl.addClassName = "incorrect";
  }

  optionsDivEl.appendChild(questionOptionEl);

  questionOptionEl = document.createElement("button");
  questionOptionEl.className = "options option4";
  questionOptionEl.textContent = questions[questionIndex].option4;
  if (questions[questionIndex].correct === 4) {
    questionOptionEl.setAttribute("id", "correct");
  } else {
    questionOptionEl.addClassName = "incorrect";
  }
  optionsDivEl.appendChild(questionOptionEl);

  const btnOptions = document.getElementsByClassName('options');

  for(var i = 0; i < btnOptions.length; i++){
      btnOptions[i].addEventListener('click', function(){
        const btnId = this.getAttribute('id');
        if (btnId === 'correct'){
           resultEl.append('correct')
        } else {
            resultEl.append('incorrect')
                     
        }
        nextButtonEl.addEventListener("click", function() {
            questionNumber++
            displayQuestion(questionNumber);
           
    })
   
   });
   
  };
 
};


// Var highScore = function() {
// localStorage
// }



// highScore();

startButtonEl.addEventListener("click", function () {
    startQuiz();
  });