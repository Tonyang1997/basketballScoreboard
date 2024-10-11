document.addEventListener('DOMContentLoaded', function() {
  let homeScoreBtnOne = document.getElementById("home-score-btn-1");
  let homeStoreEl = document.getElementById("home-score");
  let homeScoreBtnTwo = document.getElementById("home-score-btn-2"); 
  let homeScoreBtnThree = document.getElementById("home-score-btn-3"); 
  let homeScoreBtnFour = document.getElementById("home-score-btn-4");
  let homeScoreBtnFive = document.getElementById("home-score-btn-5");
  let homeScoreBtnSix = document.getElementById("home-score-btn-6");
  let homeStore1El = document.getElementById("home-score1");
  let homeScore = 0;
  let homeScore1 = 0;

  function increaseHomeScoreOne() {
    homeScore += 1;
    homeStoreEl.textContent = homeScore;
  }
  function increaseHomeScoreTwo() {
    homeScore += 2;
    homeStoreEl.textContent = homeScore;
  }
  function increaseHomeScoreThree() {
    homeScore += 3;
    homeStoreEl.textContent = homeScore;
  }
  function increaseHomeScoreFour() {
    homeScore1 += 1;
    homeStore1El.textContent = homeScore1;
  }
  function increaseHomeScoreFive() {
    homeScore1 += 2;
    homeStore1El.textContent = homeScore1;
  }
  function increaseHomeScoreSix() {
    homeScore1 += 3;
    homeStore1El.textContent = homeScore1;
  }

  // Clear functions for each set of buttons
  function clearHomeScores() {
    homeScore = 0;
    homeStoreEl.textContent = homeScore;
  }

  function clearGuestScores() {
    homeScore1 = 0;
    homeStore1El.textContent = homeScore1;
  }

  // Direct call to functions when buttons are clicked:
  homeScoreBtnOne.onclick = increaseHomeScoreOne;
  homeScoreBtnTwo.onclick = increaseHomeScoreTwo;
  homeScoreBtnThree.onclick = increaseHomeScoreThree; 
  homeScoreBtnFour.onclick = increaseHomeScoreFour; 
  homeScoreBtnFive.onclick = increaseHomeScoreFive; 
  homeScoreBtnSix.onclick = increaseHomeScoreSix; 

  // Add "clear" buttons (assuming you have them with the IDs "clear-button" and "clear-button1")
  let clearButton = document.getElementById("clear-button");
  let clearButton1 = document.getElementById("clear-button1");
  clearButton.onclick = clearHomeScores;
  clearButton1.onclick = clearGuestScores;
});