// Constants
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const timeleft = document.getElementById("timeleft");
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById("loader");
const loader = document.getElementById("game");
//Points per score
const CORRECT_BONUS = 10;
//Numner of questions per game
const MAX_QUESTIONS = 4;


//Let
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];


//Pulling questions from Json file
fetch('/assets/js/questions.json')
    .then(res => res.json())
    .then(data => {
        questions = data;
        // console.log(data)
        startGame()
    })
    .catch(error => console.log(error))

//Start game function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
    //adds and hides loader while questions load
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

//Countdown timer for each question
timer = () => {
    //Set timer decreases 1 every second
    time = time - 1;
    if (time < 30) {
        //Display time left
        timeleft.innerHTML = `<i class="far fa-clock"></i> : ${time} seconds`;
    }
    if (time < 1) {
        //Moves to next question when time is up
        clearInterval(update);
        getNewQuestion();
    }
};

//Checks if all questions are done, if not it goes on the next question and updates the choices

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }

    // Updates the progress bar
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    //Updates question and choices
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


// set timer of 30s for each question
//   time = 30;
//  update = setInterval("timer()", 1000);
//  acceptingAnswers = true;
//  };


// Goes through all choices and attaching a click event to them
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        //Applies css styling for right or wrong answers choosen 

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        //Increments players score for choosing the right answers
        selectedChoice.parentElement.classList.add(classToApply);

        selectedChoice.parentElement.classList.add('classToApply');

        //Adds delay before next question and removes CSS styling to answers
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};