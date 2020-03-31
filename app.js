//import compareNumbers from './compareNumbers.js';

const finalMessage = document.getElementById('final-message');
const numberGuessInput = document.getElementById('number-guess');
const submitButton = document.getElementById('submitButton');
const guessesRemaining = document.getElementById('guesses-remaining');


//let correctAnswer;

let numberGuess = Number(numberGuessInput.value);
let correctAnswer = Math.ceil(Math.random() * 20);


let triesRemaining = 4;

submitButton.addEventListener('click', () => {
    compareNumbers();
    triesRemaining--;
    guessesRemaining.textContent = triesRemaining;

    if (triesRemaining === 0) {
        finalMessage.textContent = 'Game over! You are a bad guesser..';
        document.getElementById('number-guess').disabled = true;
    }
});

function compareNumbers(numberGuess, correctAnswer) {
    if (numberGuess === correctAnswer) {   
        finalMessage.textContent = 'Nice Guess! You got it!';
    }
    else if (numberGuess > correctAnswer){
        finalMessage.textContent = 'Too high!';
    }
    else if (numberGuess < correctAnswer) {
        finalMessage.textContent = 'Too low!';
    }
    
}






