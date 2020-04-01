const finalMessage = document.getElementById('final-message');
const numberGuessInput = document.getElementById('number-guess');
const submitButton = document.getElementById('submitButton');
const guessesRemaining = document.getElementById('guesses-remaining');
const resetButton = document.getElementById('reset-button');

let correctAnswer = Math.ceil(Math.random() * 20);

let triesRemaining = 4;

function compareNumbers() {   
    if (numberGuessInput.value > correctAnswer){
        finalMessage.textContent = 'Too high!';
    }
    else if (numberGuessInput.value < correctAnswer) {
        finalMessage.textContent = 'Too low!';
    }
    else {   
        finalMessage.textContent = 'Nice Guess! You got it!';
        document.getElementById('submitButton').disabled = true;    
    }
}

submitButton.addEventListener('click', () => {
    compareNumbers();
    triesRemaining--;
    guessesRemaining.textContent = triesRemaining;

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



resetButton.addEventListener('click', () => {
    location.reload();
});









