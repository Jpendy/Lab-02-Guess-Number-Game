//compares numbers and sends if they are the same

export function compareNumbers(numberGuessInput, correctAnswer) {   
    if (numberGuessInput.value > correctAnswer){
        return 1;
    }
    else if (numberGuessInput.value < correctAnswer) {
        return 2;
    }
    else {   
        return 3;      
    }   
}