const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion ={}
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions =[]

let question = []

let questions = [
    {
       question: "Which of the following is popularly used for storing bitcoins?",
       choice1: "Pocket",
       chocie2: "Wallet",
       choice3: "Box",
       choice4: "Stack",
       answer: 1
   
    },
    "questions" = 
        {
           question: "Which of the following is popularly used for storing bitcoins?",
           choice1: "Pocket",
           chocie2: "Wallet",
           choice3: "Box",
           choice4: "Stack",
           answer: 2
       
        },
        "questions" = 
            {
               question: "Which of the following is popularly used for storing bitcoins?",
               choice1: "Pocket",
               chocie2: "Wallet",
               choice3: "Box",
               choice4: "Stack",
               answer: 3
           
            },
            "questions" = {
                   question:"Which of the following is popularly used for storing bitcoins?",
                   choice1: "Pocket",
                   chocie2: "Wallet",
                   choice3: "Box",
                   choice4: "Stack",
                   answer: 4
               
                },
            ]  

    startGame();