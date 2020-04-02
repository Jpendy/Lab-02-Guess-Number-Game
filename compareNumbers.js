//compars numbers and sends if they are the same


export function compareNumbers(numberGuessInput, correctAnswer) {   
    if (numberGuessInput.value > correctAnswer){
        return 'Too high!';
    }
    else if (numberGuessInput.value < correctAnswer) {
        return 'Too low!';
    }
    else {   
        return 'Nice Guess! You got it!';
         
          
    }
    
    
}