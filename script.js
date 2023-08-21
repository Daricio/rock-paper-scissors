

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
    }
    // otherwise player win, Player Choice beats Computer Choice
    else if (computerSelection === 'Rock' && playerSelection === 'Paper' ||
    computerSelection === 'Paper' && playerSelection === 'Scissors' ||
    computerSelection === 'Scissors' && playerSelection === 'Rock') {
        roundPoints = 1;
    }
    else {
        return 'Selections error';
    }

    console.log(getRoundResultMessage(roundPoints, playerSelection, computerSelection));
    // change scores
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

function capitalize(string) {
    string = string.toLowerCase();
    firstLetter = string.substr(0, 1);
    string = string.replace(firstLetter, firstLetter.toUpperCase());
    return string;
}

// two scores, everything besides score in event handler
// when press button r/p/s, play round with corresponding player choice, get round points, add to score
// announce round result
// when one of scores = 5, announce winner of the game, reset scores

let playerScore = 0;
let computerScore = 0;

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
});
paperButton.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
});

// function game() {
//     // initialize score, declare round points, player and computer selections, cancel
//     let score = 0;
//     let roundPoints;
//     let playerSelection;
//     let computerSelection;

//     // - get player selection
//     playerSelection = prompt('First comes rock... Rock, paper, scissors!');
//     // - capitalize player selection
//     playerSelection = capitalize(playerSelection);
//     // - get computer selection
//     computerSelection = getComputerChoice();
//     // - play a round, get round points
//     roundPoints = playRound(playerSelection, computerSelection);
//     // - add round points to the score
//     score += roundPoints;
//     // - get round result message
//     roundResult = getRoundResultMessage(roundPoints, playerSelection, computerSelection);
//     // - display round result
//     console.log(`Round ${i + 1}: ${roundResult}\nCurrent score: ${score}`);

//     // report a winner: if score > 0, win; 0 -> tie; score < 0 -> lose
//     if (score === 0) {
//         console.log('Game result: A tie!');
//     }
//     else if (score > 0) {
//         console.log('Game result: You won!');
//     }
//     else {
//         console.log('Game result: You lost');
//     }
// }