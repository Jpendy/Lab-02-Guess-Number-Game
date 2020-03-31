const finalMessage = document.getElementById('final-message');
const numberGuessInput = document.getElementById('number-guess');
const submitButton = document.getElementById('submitButton');
const guessesRemaining = document.getElementById('guesses-remaining');

let correctAnswer = Math.ceil(Math.random() * 20);

console.log(correctAnswer);

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
    }
}

submitButton.addEventListener('click', () => {
    compareNumbers();
    triesRemaining--;
    guessesRemaining.textContent = triesRemaining;

    if (triesRemaining === 0) {
        finalMessage.textContent = 'Game over! You are a bad guesser..';
        document.getElementById('number-guess').disabled = true;
    }
});







