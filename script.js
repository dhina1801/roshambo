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


function playRound(playerSelection,computerSelection,winner) {
    if (playerSelection === computerSelection) {
        winner = 'It\'s a tie';
        console.log(winner);
        console.log( 'Your Score: ' + playerScore + '  Computer Score: ' +computerScore);
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        winner = 'You win';
        playerScore++;
        console.log(winner+'! '+ playerSelection+ ' beats ' + computerSelection);
        console.log( 'Your Score: ' + playerScore + '  Computer Score: ' +computerScore);
    } else {
        winner = 'Computer wins';
        computerScore++;
        console.log(winner + '! ' + computerSelection+ ' beats ' + playerSelection);
        console.log( 'Your Score: ' + playerScore + '  Computer Score: ' +computerScore);
    }
}


function gameOver() {
    console.log('Game Over');
    if (playerScore > computerScore) {
        console.log('Congrats! You win');
    } else if (playerScore < computerScore) {
        console.log ('Oh No! Computer wins');
    } else {
        console.log('The Match has drawn!')
    }
    playerScore = 0;
    computerScore = 0;
}
let playerScore = 0;
let computerScore = 0;
function game() {
        let playerSelection = prompt('Enter your weapon (rock, paper, or scissors)', "").toLowerCase();
        if ((playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') || playerSelection === (null||undefined)) {
            return prompt('Please! Enter the correct weapon (rock, paper, or scissors)', '').toLowerCase();
        }
        let computerSelection = getComputerChoice();
        let winner =' '
        playRound(playerSelection,computerSelection,winner);
}

function playGame() {
    game();
    if (playerScore === 5 || computerScore === 5) {
        gameOver();
    } else {
        playGame();
    }
}