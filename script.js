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
        console.log("Rock loses to paper, computer wins!");
      } else if (computerSelection === CHOICES.SCISSORS) {
        console.log("Rock beats scissors, player wins!");
      } else {
        console.log("Rock clashes with rock, tie!");
      }
      break;
    case CHOICES.PAPER:
      if (computerSelection === CHOICES.ROCK) {
        console.log("Paper beats rock, player wins!");
      } else if (computerSelection === CHOICES.SCISSORS) {
        console.log("Paper loses to scissors, computer wins!");
      } else {
        console.log("Paper clashes with paper, tie!");
      }
      break;
    case CHOICES.SCISSORS:
      if (computerSelection === CHOICES.ROCK) {
        console.log("Scissors loses to rock, computer wins!");
      } else if (computerSelection === CHOICES.PAPER) {
        console.log("Scissors beats paper, player wins!");
      } else {
        console.log("Scissors clashes with scissors, tie!");
      }
      break;
  }
}

let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
let computerChoice = getComputerChoice();

playRPS(playerChoice, computerChoice);
