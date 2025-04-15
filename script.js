"use strict";
const userName = prompt("Enter your Name");
document.getElementById("name--1").textContent = `${userName} :`;
//Buttons To Be Used
const btnRock = document.querySelector(".btn--rock");
const btnPaper = document.querySelector(".btn--paper");
const btnScissors = document.querySelector(".btn--scissors");
const btnNxt = document.querySelector(".nxt-rnd");
const btnReset = document.querySelector(".reset");

//Scores
const score0El = document.querySelector(".score--0");
const score1El = document.querySelector(".score--1");
const player0El = document.querySelector(".random");
const player1El = document.querySelector(".guess");
const image0El = document.querySelector(".random");
const image1El = document.querySelector(".guess");
score0El.textContent = 0;
score1El.textContent = 0;
const scores = [0, 0];
let guess;
let won = false;

const winner = function () {
  if (scores[0] >= 5) {
    document.querySelector(".computer").classList.add("winner");
    won = true;
  } else if (scores[1] >= 5) {
    document.querySelector(".player").classList.add("winner");
    won = true;
  }
};

const checking = function () {
  guess = decision();
  console.log(guess);
  image0El.classList.toggle("hidden");
  image1El.classList.toggle("hidden");
  if (guess === 1) {
    player0El.src = "rock.png";
  } else if (guess === 2) {
    player0El.src = "paper.png";
  } else {
    player0El.src = "scissor.png";
  }
};
//Aspects
const rock = 1;
const paper = 2;
const scissor = 3;
let playing = true;
const decision = function () {
  return Math.trunc(Math.random() * 3) + 1;
};

//Button Rock
btnRock.addEventListener("click", function () {
  if (playing) {
    checking();
    player1El.src = "rock.png";
    if (guess === rock) {
      //none
    } else if (guess === paper) {
      scores[0]++;
      score0El.textContent = scores[0];
    } else {
      scores[1]++;
      score1El.textContent = scores[1];
    }
    playing = false;
    winner();
  }
});

//Button Paper
btnPaper.addEventListener("click", function () {
  if (playing) {
    checking();
    player1El.src = "paper.png";
    if (guess === rock) {
      scores[1]++;
      score1El.textContent = scores[1];
    } else if (guess === paper) {
      //none
    } else {
      scores[0]++;
      score0El.textContent = scores[0];
    }
    playing = false;
    winner();
  }
});

//Button Scissors
btnScissors.addEventListener("click", function () {
  if (playing) {
    checking();
    player1El.src = "scissor.png";

    if (guess === rock) {
      scores[0]++;
      score0El.textContent = scores[0];
    } else if (guess === paper) {
      scores[1]++;
      score1El.textContent = scores[1];
    } else {
      //none
    }
    playing = false;

    //player won
    winner();
  }
});

//Clears The Round
btnNxt.addEventListener("click", function () {
  if (!won) {
    image0El.classList.add("hidden");
    image1El.classList.add("hidden");
    playing = true;
  }
});

//Reset button;
btnReset.addEventListener("click", function () {
  image0El.classList.add("hidden");
  image1El.classList.add("hidden");
  playing = true;
  won = false;
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.querySelector(".player").classList.remove("winner");
  document.querySelector(".computer").classList.remove("winner");
});
