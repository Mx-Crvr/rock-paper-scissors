"use strict"
function getComputerChoice() {
    let array = ['rock', 'paper', 'scissors']
    let randomElem = array[(Math.floor(Math.random() * array.length))];

    return randomElem;
};



let playerScore = 0
let computerScore = 0

function round(playerChoice, computerChoice) {
   
    if (playerChoice === computerChoice) {
        return 'Draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')     
        ) {
            playerScore++
            return `Computer chose ${computerChoice}. Player wins`;
        } else if (
            (playerChoice === 'rock' && computerChoice === 'paper') || 
            (playerChoice === 'scissors' && computerChoice === 'rock') ||
            (playerChoice === 'paper' && computerChoice === 'scissors')
        ) {
            computerScore++
            return `Computer chose ${computerChoice}. Computer wins`;
        }
}


function game() {
    for (let i = 0; i < 1000; i++) {
        const playerChoice = prompt('rock paper scissors');
        const computerChoice = getComputerChoice()
        console.log(round(playerChoice, computerChoice))
        console.log(`Player: ${playerScore} | Computer: ${computerScore}`)

        if (computerScore === 5) {
            console.log('computer wins')
            break;
        } else if (playerScore === 5) {
            console.log('Player wins!')
            
            break;
        }
    } 
}

game();