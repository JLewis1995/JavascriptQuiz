// Questions/possible answers with correct answer
var questions = [
    {question: "Where does meta data go?",
    options: ["Body","Link","Head","Footer"],
    answer: "Head"},

    {question: "Where do Javascript links go?",
    options: ["Body","Footer","Head","Div"],
    answer: "Body"},

    {question: "What is the file extension for Javascript?",
    options: [".pdf",".txt",".html",".js"],
    answer: ".js"},

    {question: "How many children can an element have?",
    options: ["1","7","As many as they want, bro!","That's kinda personal..."],
    answer: "As many as they want, bro!"}
]

// elements in HTML variables
var questionEl = $('#question');
var timerEl = $('#timer');
var startBtn = $('#start');
var ansOptions = $('#options');

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
    questionEl.text(fnQuestion);

    // create for loop to display all options
    for (let i = 0; i < questions[curQues].options.length; i++) {
        var optBtn = $('<button>');
        optBtn.addClass('option-button');
        optBtn.attr('option-picked', questions[curQues].options[i]);
        optBtn.text(questions[curQues].options[i]);
        ansOptions.append(optBtn);
    }
    // add one to currentQuestion var to go to next question on next call
    currentQuestion++;
}

function nextQuestion() {
    ansOptions.children().remove();

    if (currentQuestion === 4) {
        finished = true;
        questionEl.text("");
    } 
    else if (timeRemaining < 0) {
        finished = true;
        timeRemaining = 0;
        questionEl.text("");
    }
    else {
        displayQuestion(currentQuestion);
    }
}

// ask for initials and save those + timeremaining to local storage - use to display scoreboard
function scoreboard() {
    var userScore = {
        initials: prompt("What are your initials?"),
        score: timeRemaining
    }

    totalScores.push(userScore);
    console.log(userScore);
    console.log(totalScores);

    localStorage.setItem('allScores', JSON.stringify(totalScores));

    function renderScores() {
        // for loop for all scores within total scores
        questionEl.text("done");
        timerEl.text("");
        startBtn.show();
    }
    renderScores();
}

// begin timer reduce from 30
function startTimer() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timerEl.text(timeRemaining);
    
        if ((timeRemaining === 0) || (finished===true)) {
            finished=true;
            clearInterval(timerInterval);
            scoreboard();
        }
      }, 1000);
}

function init() {
    var storedScores = JSON.parse(localStorage.getItem("userScore"));
    if (storedScores !== null) {
        totalScores = storedScores;
    }
}

// main playGame funtion
function playGame(event) {
        event.preventDefault();
        startTimer();    
        startBtn.hide();
            if (finished === false) {
            displayQuestion(currentQuestion);
        }
}

function check(event) {
    event.preventDefault();

    var ansPicked = $(event.target).attr('option-picked');
    var lastQAns = currentQuestion-1;

    if (ansPicked !== (questions[lastQAns].answer)) {
        timeRemaining -=10;
        nextQuestion();
    } else {
        nextQuestion();
    }

}

init();

startBtn.on("click", playGame);

ansOptions.on('click', '.option-button', check);