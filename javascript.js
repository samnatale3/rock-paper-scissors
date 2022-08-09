let choices = ['rock', 'paper', 'scissors'];

// randomises a number 1-3 and floors the value (no decimals)
function getComputerChoice() {
    var rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

// forces player to make a valid choice
function getPlayerChoice() {
    var choice = '';
    
    while (choices.includes(choice.toString().toLowerCase()) == false) {
        choice = prompt('Please enter your choice: (Rock, Paper, Scissors)');
    }

    return choice.toString().toLowerCase();
}

// checks if player 1 is winner against p2
function checkIfWinner(p1, p2) {
    if (p1 == 'rock' && p2 == 'scissors') return true;
    if (p1 == 'scissors' && p2 == 'paper') return true;
    if (p1 == 'paper' && p2 == 'rock') return true;
    return false;
}

// if both same then tie, if player 1 not winner then player 2 must be
function checkWinner(p1, p2){
    if (p1 == p2)  return 0;
    else {
        if (checkIfWinner(p1, p2)) {
            return 1;
        }
        return 2;
    }
}

// simulates a single round
function playRound() {
    var comp = getComputerChoice();
    var player = getPlayerChoice();
    console.log('Computer played: ' + comp);
    console.log('Player played: ' + player);

    let winner = checkWinner(comp, player);

    switch (winner) {
        case 0:
            console.log('Tie, play again');
            return playRound();
        case 1:
            console.log('Computer Wins');
            break;
        case 2:
            console.log('Player Wins');
            break;
        default:
            break;
    }

    return winner;
}

// empty list to store previous winner
let winners = [];

// loops through 3 rounds
for (let i = 0; i < 3; i++) {
    console.log('Round ' + (i+1));
    let winner = playRound();

    // if player has already won before then they have 2 wins, therefore gameover
    if (winners.includes(winner)) {
        break;
    // add them to the winners list
    } else {
        if (winner != 0) winners.push(winner);
    }
}
console.log('Game Over');