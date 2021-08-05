const playerScore_span = document.querySelector('#player-score');
const computerScore_span = document.querySelector('#computer-score');

//results text
const container_div = document.querySelector('#container');
const buttons = document.querySelectorAll('.btn-choice');
const roundResult_div = document.createElement('div');
container_div.appendChild(roundResult_div);
roundResult_div.style.cssText = "margin: 0 0 30px 0; height: 20px; font-size: 25px; font-weight: bold;";

//restart button
const restartButton = document.createElement('button');
restartButton.innerText = "Restart";
container_div.appendChild(restartButton);
restartButton.style.cssText = "padding: 5px 15px; margin: 35px 0 10px 0; color: #ffd166; font-weight: bold; background-color: #ef476f; border-radius: 10px; border-color: #ef476f;";
restartButton.addEventListener('click', () => window.location.reload());

// keep track of scores
let playerScore = 0;
let computerScore = 0;

buttons.forEach( button => {
    button.addEventListener('click', () => {
        const playerSelection = (button.innerText).toLowerCase();
        playSingleRound(playerSelection, computerPlay());
    })
})

function computerPlay() {
    let randomIntegerNumber = Math.floor(Math.random() * 3); //range [0, 2]
    if(randomIntegerNumber === 0) return "rock";
    else if(randomIntegerNumber === 1 ) return "paper";
    else return "scissors";
}

function playSingleRound(playerSelection, computerSelection) {
    let roundResult;
    if (playerSelection === computerSelection) {
        roundResult = 'draw';
    }
    else if( playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "rock") { 
        roundResult = 'player wins';
    }
    else { 
        roundResult = 'computer wins';
    }

    checkScores(roundResult, playerSelection, computerSelection);
}

function checkScores(roundResult, playerSelection, computerSelection) {
    if(playerScore < 5 && computerScore < 5 ) {
        updateRunningScore(roundResult, playerSelection, computerSelection); //change running score
    }
    if(playerScore === 5 || computerScore === 5) {
        if(playerScore === computerScore) {
            roundResult_div.innerText = "Final Result: It's a Draw";
        }
        else {
            if(playerScore === 5) {
                roundResult_div.innerText = "Final Result: You Win";
            }
            else {
                roundResult_div.innerText = "Final Result: Computer Wins";
            }
        }
        roundResult_div.style.cssText = "margin: 0 0 30px 0; height: 20px; font-size: 25px; font-weight: bolder; color: #ef476f;";
//disable buttons(until restart is clicked) when one player reaches 5 pts        
        buttons.forEach( (button) => {button.disabled = true})
    }
}

function updateRunningScore(roundResult, playerSelection, computerSelection)
{
    if(roundResult === "player wins") {
        playerScore++
        playerScore_span.innerText = playerScore; // update running score display
        roundResult_div.innerText = `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(roundResult === "computer wins") {
        computerScore++;
        computerScore_span.innerText = computerScore; // update running score display
        roundResult_div.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else {
        roundResult_div.innerText = `It's a Draw, You both chose ${playerSelection}`;
    }
}
