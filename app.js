import { compareNumbers } from './compareNumbers.js';

const finalMessage = document.getElementById('final-message');
const numberGuessInput = document.getElementById('number-guess');
const submitButton = document.getElementById('submitButton');
const guessesRemaining = document.getElementById('guesses-remaining');
const resetButton = document.getElementById('reset-button');

let correctAnswer = Math.ceil(Math.random() * 20);

let triesRemaining = 4;

// function compareNumbers() {   
//     if (numberGuessInput.value > correctAnswer){
//         finalMessage.textContent = 'Too high!';
//     }
//     else if (numberGuessInput.value < correctAnswer) {
//         finalMessage.textContent = 'Too low!';
//     }
//     else {   
//         finalMessage.textContent = 'Nice Guess! You got it!';
//         document.getElementById('submitButton').disabled = true;    
//     }
// }

submitButton.addEventListener('click', () => {
    //compareNumbers(numberGuessInput, correctAnswer);
    let compareResult = compareNumbers(numberGuessInput, correctAnswer);

    if (compareResult === 'Too high!')
    {
        finalMessage.textContent = 'Too high!';
        triesRemaining = updateSpan(triesRemaining, guessesRemaining);
    } 
    else if (compareResult === 'Too low!')
    {
        finalMessage.textContent = 'Too low!';
        triesRemaining = updateSpan(triesRemaining, guessesRemaining);
    } 
    else 
    {
        finalMessage.textContent = 'Nice Guess! You got it!';
        document.getElementById('submitButton').disabled = true;
    }
    //triesRemaining--;
    //guessesRemaining.textContent = triesRemaining;

    if (numberGuessInput.value > 20){
        alert('That is an invalid number');
    }
    if (triesRemaining === 0) {
        finalMessage.textContent = 'Game over! You are a bad guesser..';
        document.getElementById('number-guess').disabled = true;
        guessesRemaining.textContent = '0';
        document.getElementById('submitButton').disabled = true;
    }
});

function updateSpan(triesRemaining, guessesRemaining){
    triesRemaining--;
    guessesRemaining.textContent = triesRemaining;
    return triesRemaining;
}


resetButton.addEventListener('click', () => {
    location.reload();
});









