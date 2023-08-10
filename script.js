

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    // get random number out of 1-3 range, store it in variable choice
    let choice = generateRandom(1, 4);
    // if 1 - return rock
    // if 2 - return paper
    // if 3 - return scissors
    switch (choice) {
        case 1:
            return 'rock';
            break;

        case 2:
            return 'paper';
            break;

        case 3:
            return 'scissors';
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
// - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
    // capitalize player celection
    playerSelection = capitalize(playerSelection);
    // if player = computer -> tie; print playerChoice vs. Computer Choice
    if (playerSelection === computerSelection) {
        return `A tie! ${playerSelection} vs. ${computerSelection}`;
    }
    // player - rock, computer - paper -> you lose
    // player - paper, computer - scissors -> you lose
    // player - scissors, computer - rock -> you lose, Computer Choice beats Player Choice
    else if (playerSelection === 'Rock' && computerSelection === 'Paper'
    || playerSelection === 'Paper' && computerSelection === 'Scissors'
    || playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    // otherwise player win, Player Choice beats Computer Choice
    else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

function capitalize(string) {
    string = string.toLowerCase();
    firstLetter = string.substr(0, 1);
    string = string.replace(firstLetter, firstLetter.toUpperCase());
    return string;
}