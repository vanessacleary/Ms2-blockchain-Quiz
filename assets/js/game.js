// Constanants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

// Let
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];

// Loads question from jSon
$.ajax({
    url: "./assets/data/questions.json",
    success: function (data, textStatus, jqXHR) {
        console.log(data);
        questions = data;
        startGame();
    },
    error: function (jqXHR, textStatus, errorThrow) {
        console.error(errorThrow);
    },
    dataType: "json",
});

/*
Load questions
*/
//  fetch("questions.json")
//     .then(res => {
//         return res.json();
//      })
//      .then(loadedQuestions => {
//          console.log(res);
//          questions = loadedQuestions;
//          startGame();
//      })
//      .catch(err => {
//          console.error(err);
//      });

//start game function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};


// Checks if all questions were done, if not goes on the next question and updates the choices

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }

    // Updates the progress bar
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    // Updates question and choices
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    console.log(currentQuestion);
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(question.Index, 1);
    acceptingAnswers = true;
};

// Alternative using JQuery
// $(".choice-text").click(function(e){ 
// });


// Goes through all choices and attaching a click event to them
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        //Applies css styling for right or wrong answers choosen 

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        //Increments players score for choosing the right answers
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add('classToApply');

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove('classToApply');
            getNewQuestion();
        }, 1000);

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};