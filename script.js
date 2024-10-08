//selecting the element
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let score0 = document.querySelector("#score--0");
let score1 = document.querySelector("#score--1");
let current0 = document.querySelector("#current--0");
let current1 = document.querySelector("#current--1");
let image = document.querySelector(".dice");
let rollDiceBtn = document.querySelector(".btn--roll");
let holdDiceBtn = document.querySelector(".btn--hold");
let newBtn = document.querySelector(".btn--new");

let currentScore;
let currentPlayer;
let isPlaying;
let totalScore;

function initialValues() {
  totalScore = [0, 0];
  isPlaying = true;
  currentPlayer = 0;
  currentScore = 0;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  image.classList.add("hidden");
  //   image.classList.add("hidden");
  player0.classList.add(`player--active`);
  player1.classList.remove("player--active");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
}
initialValues();

//to switch the user
function switchUser() {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer == 0 ? 1 : 0;
  image.classList.remove("hidden");
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
  console.log(currentPlayer);
}

//when dice button is clicked
rollDiceBtn.addEventListener("click", function () {
  if (isPlaying) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    image.classList.remove("hidden");
    image.src = `dice-${randomNumber}.png`;
    if (randomNumber !== 1) {
      currentScore = currentScore + randomNumber;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchUser();
    }
  }
});

//when hold button is pressed
holdDiceBtn.addEventListener("click", function () {
  if (isPlaying) {
    totalScore[currentPlayer] = totalScore[currentPlayer] + currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      totalScore[currentPlayer];

    if (totalScore[currentPlayer] >= 20) {
      isPlaying = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove(`player--active`);
      image.classList.add("hidden");
    } else {
      switchUser();
    }
  }
});

//when new button is clicked
newBtn.addEventListener("click", initialValues);
