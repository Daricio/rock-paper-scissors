

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    // get random number out of 1-3 range, store it in variable choice
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