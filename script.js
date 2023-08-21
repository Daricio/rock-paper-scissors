const roundResult = document.getElementById('round-result');

let playerScore = 0;
let computerScore = 0;

const yourScore = document.getElementById('your-score');
const opponentScore = document.getElementById('opponent-score');
const gameResult = document.getElementById('game-result');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
});
paperButton.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
});

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    // get random number out of 1-3 range, store it in variable 'choice'
    let choice = generateRandom(1, 4);
    // if 1 - return rock
    // if 2 - return paper
    // if 3 - return scissors
    switch (choice) {
        case 1:
            return 'Rock';
            break;

        case 2:
            return 'Paper';
            break;

        case 3:
            return 'Scissors';
            break;

        default:
            return 'Computer Choice generation error';
    }
}

function generateRandom(min, max) {
    // generate random number in range [0, 1)
    let rand = Math.random();
    // multiply this number by min-max difference - number of options, floor it
    let difference = max - min;
    rand = Math.floor(rand * difference);
    // add min
    rand += min;
    return rand;
}

// function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection 
// - and then return round points

function playRound(playerSelection, computerSelection) {
    // if new game, reset
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        gameResult.textContent = '';
    }

    let roundPoints;
    // if player = computer -> tie; print playerChoice vs. Computer Choice
    if (playerSelection === computerSelection) {
        roundPoints = 0;
    }
    // player - rock, computer - paper -> you lose
    // player - paper, computer - scissors -> you lose
    // player - scissors, computer - rock -> you lose, Computer Choice beats Player Choice
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Scissors' ||
    playerSelection === 'Scissors' && computerSelection === 'Rock') {
        roundPoints = -1;
        computerScore++;
    }
    // otherwise player win, Player Choice beats Computer Choice
    else if (computerSelection === 'Rock' && playerSelection === 'Paper' ||
    computerSelection === 'Paper' && playerSelection === 'Scissors' ||
    computerSelection === 'Scissors' && playerSelection === 'Rock') {
        roundPoints = 1;
        playerScore++;
    }
    else {
        return 'Selections error';
    }

    const resultMessage = getRoundResultMessage(roundPoints, playerSelection, computerSelection);
    roundResult.textContent = resultMessage;

    yourScore.textContent = `${playerScore}`;
    opponentScore.textContent = `${computerScore}`;

    // announce winner of the game
    if (playerScore === 5) {
        gameResult.textContent = 'You win!';
    }

    if (computerScore === 5) {
        gameResult.textContent = 'You lost :(';
    }

    return roundPoints;
}

function getRoundResultMessage(result, playerSelection, computerSelection) {
    switch (result) {
        case 0:
            return `A tie! ${playerSelection} vs. ${computerSelection}`;
            break;

        case 1:
            return `You win! ${playerSelection} beats ${computerSelection}`;
            break;

        case -1:
            return `You lose! ${computerSelection} beats ${playerSelection}`;
            break;

        default:
            return 'Round result error!';
            break;
    }
}