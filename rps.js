// createthe opponent side's (computer) RPS choice function
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
// RPS FUNCTION
function playRound(playerSelection , computerSelection){

    //fetch the computer's random choice   
    computerSelection = getComputerChoice();
    //convert to lower case for case insensitivity
    playerSelection = playerSelection.toLowerCase();
    // setting the results using ternary conditionals
    
    return( //used the parentheses next to return as you need them if you want to return several lines like below
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock")    ||
        (playerSelection === "scissors" && computerSelection === "paper")
    )
        //added the winningconditions
        ? `You Win! ${playerSelection} beats ${computerSelection}`
        : (
            (playerSelection === "scissors" && computerSelection === "rock") ||
            (playerSelection === "rock" && computerSelection === "paper")    ||
            (playerSelection === "paper" && computerSelection === "scissors")
        )
        //added the losing conditions
        ? `You Lose! ${computerSelection} beats ${playerSelection}`
        //if neither are true then its a draw 
        :`It's a Draw! Both chose ${computerSelection}`;  
}
console.log(playRound("scissors"))




















// (playerSelection === "rock" && computerSelection === "paper")? "You Lose! Paper beats Rock":
//         (playerSelection === "paper" && computerSelection === "scissors")? "You Lose! Scissors beat Paper":
//         (playerSelection === "scissors" && computerSelection === "rock")? "You Lose! Rock beats Scissors":
//         (playerSelection === "paper" && computerSelection === "rock")? "You Win! Paper beats Rock":
//         (playerSelection === "scissors" && computerSelection === "paper")? "You Win! Scissors beat Paper":
//         (playerSelection === "rock" && computerSelection === "scissors")? "You Win! Rock beats Scissors":