//import './example.test.js';
import { compareNumbers } from '../compareNumbers.js';

const test = QUnit.test;


test('compareNumbers function', function(assert){

    //arrange
    
    const numberGuessInput = 12;
    const correctAnswer = 12;
    const expected = 3;

    //act

    const result = compareNumbers(numberGuessInput, correctAnswer);

    //assert

    assert.equal(result, expected);
});





// function isLow(guess, correctAnswer){
//     if (guess < correctAnswer){
//         return -1;
//     }
// }

// test('isLow function', function(assert) {

//     //arrange

//     const guess = 5;
//     const correctAnswer = 7;
//     const expected = -1;

//     //act
//     const isLowResult = isLow(guess, correctAnswer);

//     //assert
//     assert.equal(isLowResult, expected);
// });



// function isHigh(guess, correctAnswer){
//     if (guess > correctAnswer){
//         return +1;
//     }
// }

// test('isHigh function', function(assert){

// //arrange

//     const guess = 10;
//     const correctAnswer = 5;
//     const expected = +1;
    
//     //act
//     const isHighResult = isHigh(guess, correctAnswer);

//     //assert
//     assert.equal(isHighResult, expected);
// });


// function isEqual(guess, correctAnswer){
//     if (guess === correctAnswer){
//         return 0;
//     }
// }

// test('isEqual function', function(assert){

//     //arrange
//     const guess = 12;
//     const correctAnswer = 12;
//     const expected = 0;

//     //act

//     const isEqualResult = isEqual(guess, correctAnswer);

//     //assert

//     assert.equal(isEqualResult, expected);


// });

