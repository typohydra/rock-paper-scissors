function computerPlay() {
    let randomIntegerNumber = Math.floor(Math.random() * 3); //range [0, 2]
    if(randomIntegerNumber === 0) return "rock";
    else if(randomIntegerNumber === 1 ) return "paper";
    else return "scissors";
}

//validate that input is correct (rock, paper or scissors)
function inputValidation(input) {
    if(input !== "rock" && input !== "paper" && input !== "scissors") {return true;}
    return false;
}

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a Draw, You both choose ${playerSelection}`;
    }
    else if( playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock"
    ) { 
        return `You Won! ${playerSelection} beats ${computerSelection}`; 
    }
    else { 
        return `You Lose! ${computerSelection} beats ${playerSelection}`; 
    }
}


function game()
{
    let playerScore = 0;
    let computerScore = 0;

    // 5 rounds
    for(let i=1; i<6; i++) 
    {
        let playerMove = prompt("Type Your Move: rock, paper or scissors");
        playerMove.toLowerCase();
        if  (inputValidation(playerMove)) 
        {
            console.log("ERROR: Invalid Input! Make sure you spell correctly.");
            return;
        }

        let singleRoundScore = playSingleRound(playerMove, computerPlay());
        console.log(`Round ${i}: ${singleRoundScore}.`)

        if(singleRoundScore.slice(0, 7) === "You Won") playerScore++;
        else if(singleRoundScore.slice(0, 8) === "You Lose") computerScore++;
        else continue; // It's a draw
    }

    // Final results
    if(playerScore == computerScore) { return "It's a Draw"}
    else if(playerScore > computerScore) { 
        return `You won the Game!
        Final Scores: player -> ${playerScore} and computer -> ${computerScore}`;
    }
    else { // computer wins
        return `You Lose the Game!
        Final Scores: player -> ${playerScore} and computer -> ${computerScore}`;
    }
}
