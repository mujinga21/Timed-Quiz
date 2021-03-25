var questionContainer = document.getElementById("current-question");
var nextQuestionButton = document.getElementById("next-question");
var timeEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

function nextQuestion() {
  questionBox.innerHTML = questions[0].question;
}

var arrayOfQuestions = [
  {
    text: "The condition in an if/else statement is enclosed within ____.",
    answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    correct: "Parentheses",
  },
  {
    text:
      "String value must be enclosed within___when being assigned to variable.",
    answers: ["Commas", "Curly brackets", "Quotes", "Square brackets"],
    correct: "Parentheses",
  },
  {
    text:
      "A very useful tool used during development and debugging for printing content to the debuggers.",
    answers: ["javaScript", "Terminal/Bash", "for loops", "Console log"],
    correct: "Console log",
  },
  {
    text: "commonly used data types DO NO include.",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: "Alerts",
  },
  {
    text: "Arrays in javaScript can be used to store _____..",
    answers: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    correct: "All of the above",
  },
];
var currentIndex = 0;

function displayQuestion() {
  questionContainer.innerHTML = "";
  var questionEl = document.createElement("h1");
  questionEl.textContent = arrayOfQuestions[currentIndex].text;
  questionContainer.append(questionEl);

  for (var i = 0; i < arrayOfQuestions[currentIndex].answers.length; i++) {
    var answerEl = document.createElement("button");
    answerEl.textContent = arrayOfQuestions[currentIndex].answers[i];
    answerEl.value = arrayOfQuestions[currentIndex].answers[i];
    answerEl.onclick = checkAnswer;
    questionContainer.append(answerEl);
  }
}
function checkAnswer() {
  var correct = this.value === arrayOfQuestions[currentIndex].correct;
  if (correct) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  currentIndex++;
  if (currentIndex < arrayOfQuestions.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  displayQuestion();
}

function countdown() {
  var timeLeft = 20;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeEl.textContent = timeLeft + "seconds remaining";
      console.log("countdown");
      timeLeft--;
    } else if (timeLeft === 1) {
      timeEl.textContent = timeLeft + "second remaining";
      timeLeft--;
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
countdown();

// Displays questions one question at the time.
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

displayQuestion();
