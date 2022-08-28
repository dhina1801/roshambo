//for computer weapon
function getComputerChoice() {
    let random = Math.floor(Math.random()*3);
    switch(random) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}
// Single round
function playRound(playerSelection,computerSelection,winner) {
    if (playerSelection === computerSelection) {
        winner = 'It\'s a tie';
        winCom.textContent = winner;
        comment.textContent = null;
        winCom.style.color = 'white';
        comment.style.color = 'white';
        updateImg(playerSelection,computerSelection);
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        winner = 'You win';
        playerScore++;
        winCom.textContent = winner + '!';
        comment.textContent = playerSelection+ ' beats ' + computerSelection;
        playerInfo.textContent = playerScore;
        winCom.style.color = 'rgb(148, 206, 140)';
        comment.style.color = 'rgb(148, 206, 140)';
        updateImg(playerSelection,computerSelection);
    } else {
        winner = 'Computer wins';
        computerScore++;
        winCom.textContent = winner + '!';
        comment.textContent = computerSelection+ ' beats ' + playerSelection;
        computerInfo.textContent = computerScore;
        winCom.style.color = 'rgb(141, 44, 44)';
        comment.style.color = 'rgb(141, 44, 44)';
        updateImg(playerSelection,computerSelection);
    }
}
// Selecting elements for UI
const playerInfo = document.querySelector('.score #player');
const computerInfo = document.querySelector('.score #computer');
const comment = document.querySelector('.scorecmnt .comment');
const winCom = document.querySelector('.scorecmnt .winner');
const plyrimg = document.querySelector('.icons #player');
const compimg = document.querySelector('.icons #computer');
const popup = document.querySelector('.popup');
const winimg = document.querySelector('.popup img');
const wintxt = document.querySelector('.popup .win');
// For Initialization of variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;
buttons = document.querySelectorAll('#btncont img');
//game
function game() {
    let computerSelection = getComputerChoice();
    let winner =' '
    playRound(playerSelection,computerSelection,winner);
}
// for img update in UI
function updateImg(playerSelection,computerSelection) {
    plyrimg.src = (playerSelection === 'rock') ? './icons/rock.png' : (playerSelection === 'paper')? './icons/paper.png' : './icons/scissors.png';
    compimg.src = (computerSelection === 'rock') ? './icons/rock.png' : (computerSelection === 'paper')? './icons/paper.png' : './icons/scissors.png';    
}
// to create a popup window which declares the winner
function gameOver() {
    popup.classList.add('gameOver');
    if (playerScore > computerScore) {
        winimg.src = './icons/player.png';
        wintxt.textContent = 'Congratulations! You Won';
        wintxt.style.color = 'rgb(148, 206, 140)'
    } else {
        winimg.src = './icons/bot.png';
        wintxt.textContent = 'Sorry! Better luck next Time, Computer have Won';
        wintxt.style.color = 'rgb(141, 44, 44)';
    }
}
// for closing the popup window
function closepopup() {
    popup.classList.remove('gameOver');
}
// for restating to initial condition
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerInfo.textContent = playerScore;
    computerInfo.textContent = computerScore;
    plyrimg.src = './icons/unknown.png';
    compimg.src = './icons/unknown.png';
    winCom.textContent = 'Let\'s Play! Choose any weapon above';
    comment.textContent = null;
    winCom.style.color = 'rgb(248, 255, 152)';
    comment.style.color = 'rgb(248, 255, 152)';
    closepopup();
}
// starts the game by clicking the weapons
buttons.forEach((img) =>{
    img.addEventListener('click', () => {
        // this assigns the value for the player's weapon
        playerSelection = img.id;
        if ((playerScore >= 5) || (computerScore >= 5)) gameOver(); // run when player presses the cancel button, so that not to play further.
        else game();
        if ((playerScore >= 5) || (computerScore >= 5)) gameOver();
    });
});