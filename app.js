"use strict"
function getComputerChoice() {
    let array = ['rock', 'paper', 'scissors']
    let randomElem = array[(Math.floor(Math.random() * array.length))];

    return randomElem;
};

const modal = document.getElementById('modal');
const playAgain = document.getElementById('play-again');
const image = document.getElementById('image');
const imgcontainer = document.getElementById('img-container');
const pScoreDisplay = document.getElementById('player-score')
const cScoreDisplay = document.getElementById('computer-score')
let playerScore = 0
let computerScore = 0
const finalScore = document.getElementById('final-score');

playAgain.addEventListener('click', () => {
    // pScoreDisplay.innerText = 'Player: 0';
    // cScoreDisplay.innerText = 'Computer: 0';
    // pScoreDisplay.style.display = 'block';
    // cScoreDisplay.style.display = 'block';
    // document.getElementById('rock').style.display = 'block';
    // document.getElementById('paper').style.display = 'block';
    // document.getElementById('scissors').style.display = 'block';
    // finalScore.innerText = '';
    // playAgain.style.display = 'none';
    window.location.reload()
})

function round(playerChoice, computerChoice) {
    const winner = document.getElementById('winner');

    if (playerChoice === computerChoice) {
        winner.innerText = `You both chose ${computerChoice}`;
        winner.style.color = 'black';
        image.src = `./imgs/${computerChoice}.svg`
        return 'Draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')     
        ) {
            playerScore++
            pScoreDisplay.innerText = `Player: ${playerScore}`; 
            cScoreDisplay.innerText = `Computer: ${computerScore}`; 
            image.src = `./imgs/${computerChoice}.svg`
            if (computerScore === 5) {
                pScoreDisplay.style.display = 'none';
                cScoreDisplay.style.display = 'none';
                document.getElementById('rock').style.display = 'none';
                document.getElementById('paper').style.display = 'none';
                document.getElementById('scissors').style.display = 'none';
                hideModal();
                finalScore.innerText = ('Computer won the match by ') + (computerScore - playerScore) + (`, better luck next time`);
                playAgain.style.display = 'block';
            } else if (playerScore === 5) {
                pScoreDisplay.style.display = 'none';
                cScoreDisplay.style.display = 'none';
                document.getElementById('rock').style.display = 'none';
                document.getElementById('paper').style.display = 'none';
                document.getElementById('scissors').style.display = 'none';
                hideModal();
                finalScore.innerText = ('Player won the match by ') + (playerScore - computerScore) + (`, well done!`);
                playAgain.style.display = 'block';
            } else {
                winner.innerText = 'Player wins this round';
                winner.style.color = 'green';
                return `Computer chose ${computerChoice}`;
            }
        } else if (
            (playerChoice === 'rock' && computerChoice === 'paper') || 
            (playerChoice === 'scissors' && computerChoice === 'rock') ||
            (playerChoice === 'paper' && computerChoice === 'scissors')
        ) {
            computerScore++
            pScoreDisplay.innerText = `Player: ${playerScore}`; 
            cScoreDisplay.innerText = `Computer: ${computerScore}`; 
            image.src = `./imgs/${computerChoice}.svg`
            if (computerScore === 5) {
                pScoreDisplay.style.display = 'none';
                cScoreDisplay.style.display = 'none';
                document.getElementById('rock').style.display = 'none';
                document.getElementById('paper').style.display = 'none';
                document.getElementById('scissors').style.display = 'none';
                hideModal();
                finalScore.innerText = ('Computer won the match by ') + (computerScore - playerScore) + (`, better luck next time`);
                playAgain.style.display = 'block';
            } else if (playerScore === 5) {
                pScoreDisplay.style.display = 'none';
                cScoreDisplay.style.display = 'none';
                document.getElementById('rock').style.display = 'none';
                document.getElementById('paper').style.display = 'none';
                document.getElementById('scissors').style.display = 'none';
                hideModal();
                finalScore.innerText = ('Player won the match by ') + (playerScore - computerScore) + (`, well done`);
                playAgain.style.display = 'block';
            } else {
                winner.innerText = 'Computer wins this round';
                winner.style.color = 'red';
                return `Computer chose ${computerChoice}`;
            }
        }
}

function game() {
    const answer = document.getElementById('answer');
    hideModal()
    document.getElementById('rock').addEventListener('click', () => {
        answer.innerText = round('rock', getComputerChoice());
        if (finalScore.innerText !== '') {
            hideModal()
        } else {
            showModal();
        }
    })
    document.getElementById('paper').addEventListener('click', () => {
        answer.innerText = round('paper', getComputerChoice());
        if (finalScore.innerText !== '') {
            hideModal()
        } else {
            showModal();
        }
    })
    document.getElementById('scissors').addEventListener('click', () => {
        answer.innerText = round('scissors', getComputerChoice());
        if (finalScore.innerText !== '') {
            hideModal()
        } else {
            showModal();
        }
    })
}

game();

function hideModal() {
    modal.style.display = 'none'
    const main = document.getElementById('main');
    main.classList.remove('blur');
}

function showModal() {
    modal.style.display = 'flex';
    const main = document.getElementById('main');
    main.classList.add('blur');
    const xIcon = document.getElementById('x-icon');
    xIcon.addEventListener('click', () => {
        hideModal();
    })
}