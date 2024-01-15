// create the opponent side's (computer) RPS choice function
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
// RPS FUNCTION
function playRound(playerSelection , computerSelection){  
    //convert to lower case for case insensitivity
    playerSelection = playerSelection.toLowerCase();
    const resultDisplay = document.querySelector('#result')
    
    if( //added the winning conditions
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock")    ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        resultDisplay.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if(//added the losing conditions
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper")    ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ){
        resultDisplay.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    
    }else{//if neither are true then its a draw 
        resultDisplay.textContent = `It's a Draw! Both chose ${playerSelection}`;
        
    }
}
// event listeners
const rck = document.querySelector('#rock');
rck.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
});
const pap = document.querySelector('#paper');
pap.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
});
const sci = document.querySelector('#scissors');
sci.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
});

// function game() {
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     playerSelection = prompt("rock paper or scissors?");
//     computerSelection = getComputerChoice();
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