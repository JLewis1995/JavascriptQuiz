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
var timerEl = $('timer');
var startBtn = document.getElementById("start");  // Need to update this to jQuery
var ansOptions = $('answerOptions');

// variables to utilize in functions below
var currentQuestion = 0;
var finished = false;

// show questions in order
function displayQuestion() {
    let fnQuestion = questions[currentQuestion].question;
    ansOptions.find("li").remove();

    questionEl.text(fnQuestion);
    questions[currentQuestion].forEach(element => {
        
    });
}

// begin timer reduce from 30
function startTimer() {
    
}

function playGame(event) {
        event.preventDefault();
        let timeRemaining = 30;
        var output = [];

        startTimer();

        if (finished === false) {
            displayQuestion();
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

startBtn.addEventListener("click", playGame);