//Constants
const highScoresList = document.getElementById("highScoresList");
//Pulls array of highscores stored in local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores

//Displays highest scores from the array using the map method

  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

