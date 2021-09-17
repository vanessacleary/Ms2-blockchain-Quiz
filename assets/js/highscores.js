//Pulls array of highscores stored in local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const highScoreList = document.getElementById("highScoreList");

//Displays highest scores from the array using the map method
highScoreList.innerHTML = highScores.map(score => {
  return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");