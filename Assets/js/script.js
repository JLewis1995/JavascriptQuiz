// Questions/possible answers x5? with correct answer
var questions = [
    {question: "Where does meta data go?",
    a: "Body", b: "Link", c: "Head", d: "Footer",
    answer: "c"},

    {question: "Where do Javascript links go?",
    a: "Head", b: "Footer", c: "Body", d: "Div",
    answer: "c"},

    {question: "What is the file extension for Javascript?",
    a: ".pdf", b: ".txt", c: ".html", d: ".js",
    answer: "d"},

    {question: "How many children can an element have?",
    a: "1", b: "7", c: "As many as they want, bro!", d: "That's kinda personal...",
    answer: "c"}
]

var questionEl = $('#question');
var timerEl = $('timer');
var startBtn = document.getElementById("start");
var currentQuestion = 0;
var finished = false;

function playGame(event) {
        event.preventDefault();
        let timeRemaining = 30;
        var output = [];

        startTimer();
        displayQuestion();

        
        // questionEl.text(questions[0]);
        // console.log(questions[0]);
        // console.log(questions.length);
        // console.log(answer);
}
    // Start timer - reduce from 30
    // display question
    
    // if incorrect answer -10 seconds & next question
    // else next question

    // if time = 0 or no more questions = game over (run gameOver)

// funtion gameOver
// ask for initials - local storage
// score = time remaining - local storage

// order leaderboard by score - highest to lowest

// display leaderboard from local storage

startBtn.addEventListener("click", playGame);