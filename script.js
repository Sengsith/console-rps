const CHOICES = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const GAME_STATE = {
  playerScore: 0,
  computerScore: 0,
  gamesPlayed: 0,
};

function getComputerChoice() {
  // Randomize choice
  let rand = Math.floor(Math.random() * 3);
  // Use random choice to select from enum
  return CHOICES[Object.keys(CHOICES)[rand]];
}

function playerWins() {
  GAME_STATE.playerScore++;
  updateScoreBoard(PLAYER_SCORE, GAME_STATE.playerScore);
}

function computerWins() {
  GAME_STATE.computerScore++;
  updateScoreBoard(COMPUTER_SCORE, GAME_STATE.computerScore);
}

function incrementGamesPlayed() {
  GAME_STATE.gamesPlayed++;
  updateScoreBoard(GAMES_PLAYED, GAME_STATE.gamesPlayed);
}

function updateScoreBoard(element, value) {
  element.textContent = value;
}

function playRPS(playerSelection, computerSelection) {
  switch (playerSelection) {
    case CHOICES.ROCK:
      if (computerSelection === CHOICES.PAPER) {
        computerWins();
        return "Rock loses to paper, computer wins!";
      } else if (computerSelection === CHOICES.SCISSORS) {
        playerWins();
        return "Rock beats scissors, player wins!";
      } else {
        return "Rock clashes with rock, tie!";
      }
    case CHOICES.PAPER:
      if (computerSelection === CHOICES.ROCK) {
        playerWins();
        return "Paper beats rock, player wins!";
      } else if (computerSelection === CHOICES.SCISSORS) {
        computerWins();
        return "Paper loses to scissors, computer wins!";
      } else {
        return "Paper clashes with paper, tie!";
      }
    case CHOICES.SCISSORS:
      if (computerSelection === CHOICES.ROCK) {
        computerWins();
        return "Scissors loses to rock, computer wins!";
      } else if (computerSelection === CHOICES.PAPER) {
        playerWins();
        return "Scissors beats paper, player wins!";
      } else {
        return "Scissors clashes with scissors, tie!";
      }
  }
}

const BTNS_CONTAINER = document.querySelector(".btns-container");
const RESULTS = document.querySelector(".results");
const PLAYER_SCORE = document.querySelector(".player-score");
const COMPUTER_SCORE = document.querySelector(".computer-score");
const GAMES_PLAYED = document.querySelector(".games-played");

let playerChoice = "";
let computerChoice = "";

BTNS_CONTAINER.addEventListener("click", (e) => {
  // Don't want to do anything if clicking within container, while missing a button
  if (e.target === BTNS_CONTAINER) return;

  playerChoice = CHOICES[e.target.className.toUpperCase()];
  computerChoice = getComputerChoice();
  RESULTS.textContent = playRPS(playerChoice, computerChoice);
  incrementGamesPlayed();
});
