const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
  

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions =[];

let questions = [
    {
       question: "Which of the following is popularly used for storing bitcoins?",
       choice1: "Pocket",
       chocie2: "Wallet",
       choice3: "Box",
       choice4: "Stack",
       answer: 1
   
    },

      {
           question: "What is a blockchain?",
           choice1: "A blockchain is a centralized digital ledger consisting of records called blocks.",
           chocie2: "A blockchain is a decentralized, distributed, digital ledger consisting of records called blocks.",
           choice3: "A blockchain is a digital database consisting of records called class.",
           choice4: "None of the above",
           answer: 2
       
        },

            {
               question:"Bitcoin is created by ________.",
               choice1: "Saifedean Ammous",
               chocie2: "Satoshi Nakamoto",
               choice3: "Vitalik Buterin",
               choice4: "None of the above",
               answer: 3
           
            },

            {
                   question:"Proof of Stake is __________.",
                   choice1: "A transaction and block verification protocol",
                   chocie2: "A certificate needed to use the blockchain",
                   choice3: "Both A and B",
                   choice4: "None of the above",
                   answer: 4
               
                },
            ];  


   // Constanants
    const CORRECT_BONUS = 10;
    const MAX_Questions = 4;

    startGame = () => {
       questionCounter = 0;
       availableQuestions = [... questions];
       console.log(availableQuestions);
       getNewQuestion();
    };

    getNewQuestion = () => {
if(availableQuestions.lenght === 0 || questionCounter >= MAX_Questions){
   //GO TO THE END PAGE
   return window.location.assign('/end.html');
}

       questionCounter++;
       questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;


       const questionIndex = Math.floor(Math.random() * availableQuestions.lenght);
       currentQuestion = availableQuestions[questionIndex];
       question.innerText = currentQuestion.question; 
   
       choices.forEach( choice => {
          const number = choice.dataset['number'];
          choice.innerText = currentQuestion['choice' + number];
       });

        availableQuestions.splice(question.Index, 1);
        acceptingAnswers = true;
   };

   choices.forEach(choice => {
      choice.addEventListener("click", e => {
         if(!acceptingAnswers) return;

         acceptingAnswers = false;
         const selectedChoice = e.target;
         const selectedAnswer = selectedChoice.dataset["number"];

         const classToApply =
         selectedAnswer = currentQuestion.answer ? "correct" : "incorrect";
         
         selectedChoice.parentElement.classList.add('classToApply');

         setTimeout( () => {
            selectedChoice.parentElement.classList.remove('classToApply');
            getNewQuestion();
         }, 1000);
 
      });
   });

    startGame();