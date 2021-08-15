const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
  

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
           question: "Which of the following is popularly used for storing bitcoins?",
           choice1: "Pocket",
           chocie2: "Wallet",
           choice3: "Box",
           choice4: "Stack",
           answer: 2
       
        },

            {
               question: "Which of the following is popularly used for storing bitcoins?",
               choice1: "Pocket",
               chocie2: "Wallet",
               choice3: "Box",
               choice4: "Stack",
               answer: 3
           
            },

            {
                   question:"Which of the following is popularly used for storing bitcoins?",
                   choice1: "Pocket",
                   chocie2: "Wallet",
                   choice3: "Box",
                   choice4: "Stack",
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
       questionCounter++;
       const questionIndex = Math.floor(Math.random() * availableQuestions.lenght);
       currentQuestion = availableQuestions[questionIndex];
       question.innerText = currentQuestion.question; 
   
       choices.forEach( choice => {
          const number = choice.dataset['number'];
          choice.innerText = currentQuestion['choice + number'];
       });

        availableQuestions.splice(question.Index, 1);
        acceptingAnswers = true;
   };

   choices.forEach(choice => {
      choice.addEventListener("click", e => {
         console.log(e.target);
      });
   });

    startGame();