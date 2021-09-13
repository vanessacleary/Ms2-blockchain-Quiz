//Constants
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const goodEffort = document.getElementById("good-effort");
const congrats = document.getElementById("congrats");
const noGood = document.getElementById("no-good");
//Number of highscores to be saved and shown on highscores page 
const MAX_HIGH_SCORES = 5;

let highScoresArray = [];
highScores.forEach(function (obj) {
  highScoresArray.push(obj.score);
});

// Compare the most rencent score with the scores in the highScoreArray
if (mostRecentScore > Math.max(...highScoresArray)) {
    //Displays congrats message for a new high sore
    congrats.classList.remove("hidden");
  } else if (mostRecentScore == 0) {
    noGood.classList.remove("hidden");
  } else {
    //Display a good effort message if it's not a new high score
    goodEffort.classList.remove("hidden");
  }

finalScore.innerText = mostRecentScore;

//Disables the save score button if no name put in
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});


saveHighScore = (event) => {
    event.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    //Push highscore into an array
    highScores.push(score);
    //Sorts highscores into hierarchical order
    highScores.sort((a, b) => b.score - a.score)
    //Cuts the array of highscores so the top 5 appear
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
};