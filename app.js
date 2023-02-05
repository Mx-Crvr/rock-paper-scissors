"use strict"
function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * array.length)];
};


const scoreContainer = document.getElementById('score-container');
const result = document.getElementById('result')
const player = document.getElementById('player');
const computer = document.getElementById('computer');
let playerScore = 0;
let computerScore = 0;
const btn = document.getElementById('btn');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const computerChoice = getComputerChoice();
const choices = document.querySelectorAll('.choices');

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result.innerText = `It's a draw`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') || 
        (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            playerScore++;
            player.innerText = `Player: ${playerScore}`
            result.innerText = `You win! ${playerChoice} beats ${computerChoice}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'rock')
    ) {
        computerScore++;
            computer.innerText = `Computer: ${computerScore}`
            result.innerText = `You lose. Computer chose ${computerChoice} which beats ${playerChoice}`;
    } else {
        return `Something went wrong`;
    }


    if (playerScore === 5 || computerScore === 5) {
        scoreContainer.style.display = 'none';
        choices.forEach(choice => {
            choice.style.display = 'none';
        });
        btn.innerText = `Play again?`;
        getWinner();
    };  
};

function getWinner() {
    if (playerScore > computerScore) {
        result.innerText = `Congratulations! You won the game by ${playerScore - computerScore} points :)`;
        result.style.marginTop = '2em';
        result.style.fontWeight = '700';
        result.style.fontSize = '2em';
    } else if (playerScore < computerScore) {
        result.innerText = `Oh no! You lost the game by ${computerScore - playerScore} points :(`;
        result.style.marginTop = '2em';
        result.style.fontWeight = '700';
        result.style.fontSize = '2em';
    } else {
        result.innerText = `It's a draw, better luck next time`;
        result.style.marginTop = '2em';
        result.style.fontWeight = '700';
        result.style.fontSize = '2em';
    };
}

function game() {
    rock.addEventListener('click', () => {
        document.getElementById('intro').style.display = 'none';
        const computerChoice = getComputerChoice();
        playRound('rock', computerChoice);
        btn.style.display = 'block';
        // getWinner();
    });
    paper.addEventListener('click', () => {
        document.getElementById('intro').style.display = 'none';
        const computeChoice= getComputerChoice();
        playRound('paper', computerChoice);
        btn.style.display = 'block';
        // getWinner();
    });
    scissors.addEventListener('click', () => {
        document.getElementById('intro').style.display = 'none';
        const computerchoice = getComputerChoice();
        playRound('scissors', computerChoice);
        btn.style.display = 'block';
        // getWinner();
    });
};

game();

btn.addEventListener('click', () => {
    result.innerText = '';
    scoreContainer.style.display = 'grid';
    player.innerText = 'Player: 0';
    computer.innerText = 'Computer: 0';
    choices.forEach(choice => {
        choice.style.display = 'block';
    });
    btn.style.display = 'none';
    window.location.reload();
});

