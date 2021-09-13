//Constants
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//Number of highscores to be saved and shown on highscores page 
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

//Disables the save score button if no name put in
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});


saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
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