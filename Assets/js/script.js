// Questions/possible answers with correct answer
var questions = [
    {question: "Where does meta data go?",
    options: ["Body","Link","Head","Footer"],
    answer: "Head"},

    {question: "Where do Javascript links go?",
    options: ["Head","Footer","Body","Div"],
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
        optBtn.attr('option-number', questions[curQues].options[i]);
        optBtn.text(questions[curQues].options[i]);
        ansOptions.append(optBtn);
    }
    // add one to currentQuestion var to go to next question on next call
    currentQuestion++;
}

function nextQuestion(event) {
    event.preventDefault();
    
    ansOptions.children().remove();


    if (currentQuestion === 4) {
        finished = true;
        questionEl.text("");
        scoreboard();
    } 
    // else if (timeRemaining === 0) {
    //     finished = true;
    //     scoreboard();
    // }
    else {
        displayQuestion(currentQuestion);
    }
}

// ask for initials and save those + timeremaining to local storage - use to display scoreboard
function scoreboard() {
    
}

// begin timer reduce from 30
function startTimer() {
    
}

// main playGame funtion
function playGame(event) {
        event.preventDefault();
        let timeRemaining = 30;

        startTimer();

        if (finished === false) {
            displayQuestion(currentQuestion);
        }
}
  
    // if incorrect answer -10 seconds & next question
    // else next question

    // if time = 0 or no more questions = game over (run gameOver)

// funtion gameOver
// ask for initials - local storage
// score = time remaining - local storage

// order leaderboard by score - highest to lowest

// display leaderboard from local storage

startBtn.on("click", playGame);

ansOptions.on('click', '.option-button', nextQuestion);