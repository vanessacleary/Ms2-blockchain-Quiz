// Constants
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const timeleft = document.getElementById("timeleft");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
const questionTime = 30;
const questionDelay = 300;
const oneSecond = 1000;
//Points per score
const CORRECT_BONUS = 10;
//Numner of questions per game
const MAX_QUESTIONS = 10;


//Let
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];


/*
Pulling questions from Json file
*/
fetch('/assets/js/questions.json')
    .then(res => res.json())
    .then(data => {
        questions = data;
        startGame()
    })
    .catch((error) => {
        alert("couldnt load questions")
    })

/*
Start Game function
*/
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
    // Adds and hides loader while questions load
    game.classList.remove("hidden");
    loader.classList.add("hidden");

    resetTimer();
    update = setInterval("timer"(), oneSecond);
};

/*
Countdown timer for each question
*/

timer = () => {
    //Set timer decreases 1 every second
    time = time - 1;
    if (time <= questionTime)
    //Display time left
    {
        timeleft.innerHTML = `<i class="far fa-clock"></i> : ${time} seconds`
    }
    if (time < 1) {
        //Moves to next question when time is up
        resetTimer();
        getNewQuestion();
    }
};

//Checks if all questions are done, if not it goes on the next question and updates the choices

getNewQuestion = () => {
    resetTimer();

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        clearInterval(update);
        //Saves to local storage
        localStorage.setItem("mostRecentScore", score);
        //Takes user to the end page
        return window.location.assign('end.html');
    }


    // Updates the progress bar
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    //Updates question and choices
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    // console.log(currentQuestion);
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    //Removes used questions
    availableQuestions.splice(question.Index, 1);
    time = 30;
    update = setInterval("timer()", 1000);
    acceptingAnswers = true;
};

/* Resets the time */

resetTimer = () => {
    time = quesstionTime;
}

// Goes through all choices and attaching a click event to them
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        //Applies css styling for right or wrong answers choosen 
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        //Increments players score for choosing the right answers
        if (classToApply == 'correct') {
            incrementScore(CORRECT_BONUS);
        };

        selectedChoice.parentElement.classList.add(classToApply);

        //Adds delay before next question and removes CSS styling to answers
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, questionDelay);

    });
});

incrementScore = num => {
    score += CORRECT_BONUS;
    scoreText.innerText = score;
};