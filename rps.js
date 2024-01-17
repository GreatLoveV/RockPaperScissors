// create the opponent side's (computer) RPS choice function
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
let scorePlayer = 0;
let scoreComputer = 0;
let roundCount = 0;
// RPS FUNCTION
const resultDisplay = document.querySelector("#result");
function playRound(playerSelection, computerSelection) {
  //convert to lower case for case insensitivity
  playerSelection = playerSelection.toLowerCase();
  

  if (
    //added the winning conditions
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultDisplay.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    scorePlayer++;
    roundCount++;
  } else if (
    //added the losing conditions
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    resultDisplay.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    scoreComputer++;
    roundCount++;
  } else {
    //if neither are true then its a draw
    resultDisplay.textContent = `It's a Draw! Both chose ${playerSelection}`;
    roundCount++;
  }
}
const btn = document.querySelectorAll(".btns");
console.log(btn);

// event listeners
const scoreDisplay = document.querySelector("#score");
const rck = document.querySelector("#rock");
rck.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
  //     scoreDisplay.textContent = `Score is now ${scorePlayer} to ${scoreComputer}`
  // }else if (roundCount===5 && scorePlayer > scorePlayer ){
  //     scoreDisplay.textContent = `You win by ${scorePlayer} to ${scoreComputer}`
  // }else if (roundCount===5 && scorePlayer < scorePlayer ) {
  //     scoreDisplay.textContent = `You lose by ${scorePlayer} to ${scoreComputer}`
  // }else {
  //     scoreDisplay.textContent = `Its a tie, ${scorePlayer} to ${scoreComputer}`
  // }
});
const pap = document.querySelector("#paper");
pap.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
  //     scoreDisplay.textContent = `Score is now ${scorePlayer} to ${scoreComputer}`
  // }else if (roundCount===5 && scorePlayer > scoreComputer ){
  //     scoreDisplay.textContent = `You win by ${scorePlayer} to ${scoreComputer}`
  // }else if (roundCount===5 && scorePlayer < scoreComputer ) {
  //     scoreDisplay.textContent = `You lose by ${scorePlayer} to ${scoreComputer}`
  // }else {
  //     scoreDisplay.textContent = `Its a tie, ${scorePlayer} to ${scoreComputer}`
  // }
});
const sci = document.querySelector("#scissors");
sci.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
  //     scoreDisplay.textContent = `Score is now ${scorePlayer} to ${scoreComputer}`
  // }else if (roundCount===5 && scorePlayer > scoreComputer){
  //     scoreDisplay.textContent = `You win by ${scorePlayer} to ${scoreComputer}`
  // }else if (roundCount===5 && scorePlayer < scoreComputer ) {
  //     scoreDisplay.textContent = `You lose by ${scorePlayer} to ${scoreComputer}`
  // }else{
  //     scoreDisplay.textContent = `Its a tie, ${scorePlayer} to ${scoreComputer}`
  // }
});
btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundCount < 5) {
      scoreDisplay.textContent = `Score is now ${scorePlayer} to ${scoreComputer}`;
    } else if (roundCount === 5 && scorePlayer > scoreComputer) {
      scoreDisplay.textContent = `You win by ${scorePlayer} to ${scoreComputer}`;
    } else if (roundCount === 5 && scorePlayer < scoreComputer) {
      scoreDisplay.textContent = `You lose by ${scorePlayer} to ${scoreComputer}`;
    } else if (roundCount === 5 && scorePlayer === scoreComputer) {
      scoreDisplay.textContent = `Its a tie, ${scorePlayer} to ${scoreComputer}`;
    } else{
        scoreDisplay.textContent = 'baraka 3lik'
        resultDisplay.textContent = ``;
    }
  });
});
// function game() {
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     result = playRound(playerSelection, computerSelection)
//     playRound(playerSelection)
//     if (result.includes('Win')) scorePlayer++;
//     else if (result.includes('Lose'))   scoreComputer++;
//     console.log(result)

//     playerSelection = prompt("rock paper or scissors?");
//     computerSelection = getComputerChoice();
//     result = playRound(playerSelection, computerSelection)
//     playRound(playerSelection)
//     if (result.includes('Win')) scorePlayer++
//     else  if (result.includes('Lose')) scoreComputer++
//     console.log(result)

//     playerSelection = prompt("rock paper or scissors?");
//     computerSelection = getComputerChoice();
//     result = playRound(playerSelection, computerSelection)
//     playRound(playerSelection)
//     if (result.includes('Win')) scorePlayer++;
//     else if (result.includes('Lose'))  scoreComputer++;
//     console.log(result)

//     playerSelection = prompt("rock paper or scissors?");
//     computerSelection = getComputerChoice();
//     result = playRound(playerSelection, computerSelection)
//     playRound(playerSelection)
//     if (result.includes('Win')) scorePlayer++;
//     else if (result.includes('Lose')) scoreComputer++;
//     console.log(result)

//     playerSelection = prompt("rock paper or scissors?");
//     computerSelection = getComputerChoice();
//     result = playRound(playerSelection, computerSelection)
//     playRound(playerSelection)
//     if (result.includes('Win')) scorePlayer++;
//     else if (result.includes('Lose')) scoreComputer++;
//     console.log(result)

//     if (scorePlayer > scoreComputer) {
//         alert("You Win, you scored more than mr computer")
//     }else{
//         alert("Womp Womp, You lost broke aah")
//     }

// }
// game();
