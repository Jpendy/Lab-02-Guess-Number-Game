

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
    
};

export default compareNumbers;