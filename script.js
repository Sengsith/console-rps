const CHOICES = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

function getComputerChoice() {
  // Randomize choice
  let rand = Math.floor(Math.random() * 3);
  // Use random choice to select from enum
  return CHOICES[Object.keys(CHOICES)[rand]];
}

function playRPS(playerSelection, computerSelection) {
  switch (playerSelection) {
    case CHOICES.ROCK:
      if (computerSelection === CHOICES.PAPER) {
        return "Rock loses to paper, computer wins!";
      } else if (computerSelection === CHOICES.SCISSORS) {
        return "Rock beats scissors, player wins!";
      } else {
        return "Rock clashes with rock, tie!";
      }
    case CHOICES.PAPER:
      if (computerSelection === CHOICES.ROCK) {
        return "Paper beats rock, player wins!";
      } else if (computerSelection === CHOICES.SCISSORS) {
        return "Paper loses to scissors, computer wins!";
      } else {
        return "Paper clashes with paper, tie!";
      }
    case CHOICES.SCISSORS:
      if (computerSelection === CHOICES.ROCK) {
        return "Scissors loses to rock, computer wins!";
      } else if (computerSelection === CHOICES.PAPER) {
        return "Scissors beats paper, player wins!";
      } else {
        return "Scissors clashes with scissors, tie!";
      }
  }
}

const BTNS_CONTAINER = document.querySelector(".btns-container");
let playerChoice,
  computerChoice = "";

BTNS_CONTAINER.addEventListener("click", (e) => {
  // Don't want to do anything if clicking within container, while missing a button
  if (e.target === BTNS_CONTAINER) return;

  playerChoice = CHOICES[e.target.className.toUpperCase()];
  computerChoice = getComputerChoice();
  console.log(playRPS(playerChoice, computerChoice));
});
