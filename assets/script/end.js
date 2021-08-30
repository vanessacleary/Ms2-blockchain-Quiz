const username = document.getElementById('username');
const saveScoreBtn = documentgetElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
saveScoreBtn.dispabled = !username.value;
});


saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();
}