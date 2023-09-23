// create the opponent side's (computer) RPS choice function
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
// RPS FUNCTION
function playRound(playerSelection , computerSelection){  
    //convert to lower case for case insensitivity
    playerSelection = playerSelection.toLowerCase();
    
    if( //added the winning conditions
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock")    ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if(//added the losing conditions
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper")    ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
        
    }else{//if neither are true then its a draw 
        return`It's a Draw! Both chose ${playerSelection}`
        
    }
}



function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    playerSelection = prompt("rock paper or scissors?");
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection)
    playRound(playerSelection)
    if (result.includes('Win')) scorePlayer++;
    else if (result.includes('Lose'))   scoreComputer++;
    console.log(result)

    
    playerSelection = prompt("rock paper or scissors?");
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection)
    playRound(playerSelection)
    if (result.includes('Win')) scorePlayer++
    else  if (result.includes('Lose')) scoreComputer++
    console.log(result)


    playerSelection = prompt("rock paper or scissors?");
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection) 
    playRound(playerSelection)
    if (result.includes('Win')) scorePlayer++;
    else if (result.includes('Lose'))  scoreComputer++;
    console.log(result)


    playerSelection = prompt("rock paper or scissors?");
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection)
    playRound(playerSelection)
    if (result.includes('Win')) scorePlayer++;
    else if (result.includes('Lose')) scoreComputer++;
    console.log(result)


    playerSelection = prompt("rock paper or scissors?");
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection)
    playRound(playerSelection)
    if (result.includes('Win')) scorePlayer++;
    else if (result.includes('Lose')) scoreComputer++;
    console.log(result)

    if (scorePlayer > scoreComputer) {
        alert("You Win, you scored more than mr computer")
    }else{
        alert("Womp Womp, You lost broke aah")
    }

}
game();