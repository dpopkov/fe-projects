/* game.js
=====================================================
Description:
A simple guessing game for developing basic 
JavaScript.
* The game will pick a random number from 1 to 100.
* The user will try to guess the number.
* The game reports on whether the guess was too high or
    too low, or correct.
* If the guess wasn’t correct, the user tries again until
either the guess is correct or the user gets bored and
exits the game.
===================================================== */
'use strict';

window.onerror = function(message, url, line) {
    alert(`Error: ${message}\n\n${url}: ${line}`);
}

// Вынужденно пока используем глобальную переменную
let globalMaximumValue = 10;

init();
function init() {
    const startButton = document.querySelector('button#startgame');
    startButton.onclick = playGame;
    const setupButton = document.querySelector('button#setMaximum');
    setupButton.onclick = setupMaximumValue;
}

function playGame() {
    console.log('playGame()');
    // Set up the data
    let min, max;
    let answer, guess;
    let message;
    // Initialize
    [min, max] = [1, globalMaximumValue];
    answer = randomUpTo(max);
    message = 'Guess the number:';
    
    do {
        guess = prompt(`${message}\nFrom ${min} to ${max}`)
        if (guess === null) {
            return 'game cancelled';
        }
        // Check and report
        console.log(`guess = ${guess}`);
        guess = parseInt(guess); // || 0;
        if (isNaN(guess)) {
            message = 'Not a number. Try again:';
        }
        else if (guess < answer) {
            min = guess + 1
            message = 'Too Small.';
        } 
        else if (guess > answer) {
            max = guess - 1;
            message = 'Too Big.';
        }
        else {
            alert('Correct');
        }
        
    } while (guess != answer);
    return 'game over';
}

function setupMaximumValue() {
    let max = parseInt(prompt('Enter maximum value:'));
    while (isNaN(max)) {
        max = parseInt(prompt('Not a number. Enter maximum value:'));
    }
    globalMaximumValue = max;
}
