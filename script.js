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

// Run 5 rounds of rps
const ROUNDS = 5;
for (let i = 0; i < ROUNDS; i++) {
  let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
  let computerChoice = getComputerChoice();
  console.log(playRPS(playerChoice, computerChoice));
}
