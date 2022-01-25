// Questions/possible answers with correct answer
var questions = [
  {
    question: "Where does meta data go?",
    options: ["Body", "Link", "Head", "Footer"],
    answer: "Head",
  },

  {
    question: "Where do Javascript links go?",
    options: ["Body", "Footer", "Head", "Div"],
    answer: "Body",
  },

  {
    question: "What is the file extension for Javascript?",
    options: [".pdf", ".txt", ".html", ".js"],
    answer: ".js",
  },

  {
    question: "How many children can an element have?",
    options: [
      "1",
      "7",
      "As many as they want, bro!",
      "That's kinda personal...",
    ],
    answer: "As many as they want, bro!",
  },
];

// elements in HTML variables
var questionEl = $("#question");
var timerEl = $("#timer");
var startBtn = $("#start");
var ansOptions = $("#options");

// variables to utilize in functions below
var currentQuestion = 0;
var finished = false;
let timeRemaining = 30;
var totalScores = [];

// show question and options
function displayQuestion(curQues) {
  // creating funtion question variable from current question
  let fnQuestion = questions[curQues].question;
  // display question in question element
  questionEl.text(fnQuestion).addClass("center");

  // create for loop to display all options
  for (let i = 0; i < questions[curQues].options.length; i++) {
    var optBtn = $("<button>");
    optBtn.addClass("option-button");
    optBtn.attr("option-picked", questions[curQues].options[i]);
    optBtn.text(questions[curQues].options[i]);
    ansOptions.append(optBtn);
  }
  // add one to currentQuestion var to go to next question on next call
  currentQuestion++;
}

// funtion to check status and make "decision" after previous answer is choosen
function nextQuestion() {
  // remove previous answers
  ansOptions.children().remove();
  // if else to determine if we continue or finish game
  if (currentQuestion === 4) {
    finished = true;
    questionEl.text("");
  } else {
    displayQuestion(currentQuestion);
  }
}

// ask for initials and save those + timeremaining to local storage - use to display scoreboard
function scoreboard() {
  var initials = prompt("What are your initials?");
  var score = timeRemaining;
  //   remove text other than scoreboard
  questionEl.text("Leaderboard");
  ansOptions.children().remove();
  // if deducted time took timeRemaining below 0, make score 0
  if (score < 0) {
    score = 0;
  }
  // creating variable to store user info and score
  var userScore = {
    initials: initials,
    score: score,
  };

  //  create another array property for this user's attempt
  totalScores.push(userScore);
  //   add to local stoarge
  localStorage.setItem("allScores", JSON.stringify(totalScores));

  //   display scores funtion
  function renderScores() {
    // remove text and show button to start game again
    timerEl.text("");
    startBtn.show();
    // sort the array to have highest score first
    var leaderBoard = totalScores.sort((a, b) => b.score - a.score);
    // for loop to display all scores/users
    for (let j = 0; j < leaderBoard.length; j++) {
      var users = $("<li>");
      users.addClass("leader-list");
      users.text(
        `User: ${leaderBoard[j].initials} Score: ${leaderBoard[j].score}`
      );
      ansOptions.append(users);
    }
  }
  //   call funcion above
  renderScores();
}

// begin timer
function startTimer() {
  var timerInterval = setInterval(function () {
    timeRemaining--;
    // display timer
    timerEl.text(timeRemaining);
    // stopping timer
    if (timeRemaining <= 0 || finished === true) {
      finished = true;
      clearInterval(timerInterval);
      scoreboard();
    }
  }, 1000);
}

// on load funtion to get data from local storage and place into an array in memory
function init() {
  var storedScores = JSON.parse(localStorage.getItem("allScores"));
  questionEl.text("Welcome to the Javascript Quiz! Press 'Start Game' to begin!")
  if (storedScores !== null) {
    totalScores = storedScores;
  }
}

// main playGame funtion
function playGame(event) {
  event.preventDefault();
//   resetting variables & removing text
  currentQuestion = 0;
  timeRemaining = 30;
  finished = false;
  ansOptions.children().remove();
  startTimer();
  startBtn.hide();
  if (finished === false) {
    displayQuestion(currentQuestion);
  }
}

// function to check if answer was incorrect and move to next questions
function check(event) {
  event.preventDefault();

  var ansPicked = $(event.target).attr("option-picked");
  var lastQAns = currentQuestion - 1;

  if (ansPicked !== questions[lastQAns].answer) {
    timeRemaining -= 10;
    nextQuestion();
  } else {
    nextQuestion();
  }
}

init();

startBtn.on("click", playGame);

ansOptions.on("click", ".option-button", check);
