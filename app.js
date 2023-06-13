let pscore = 0;
let cscore = 0;
let rounds = 0;
let options = ["Rock", "Paper", "Scissors"];

let min = 0;
let max = 3;

function getComputerChoice() {
  return options[Math.floor(Math.random() * (max - min) + min)];
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let display = "";

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    pscore += 1;
    display =
      "You Win! Your Score: " +
      pscore +
      " Computer's Score: " +
      cscore +
      ".";

    
  } else if (playerSelection === computerSelection) {
    display = "It's a tie";
  } else {
    cscore += 1;
    display =
      "Computer Wins! Your Score: " +
      pscore +
      " Computer's Score: " +
      cscore +
      ".";

    
  }

  

  return display;
}




console.log(playRound("Rock"));
console.log(playRound("Paper"));
console.log(playRound("Scissors"));
console.log(playRound("Rock"));
console.log(playRound("Rock"));


