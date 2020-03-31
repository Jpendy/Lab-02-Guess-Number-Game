//import './example.test.js';

const test = QUnit.test;


function isLow(guess, correctAnswer){
    if (guess < correctAnswer){
        return -1;
    }
}

test('isLow function', function(assert) {

    //arrange

    const guess = 5;
    const correctAnswer = 7;
    const expected = -1;

    //act
    const isLowResult = isLow(guess, correctAnswer);

    //assert
    assert.equal(isLowResult, expected);
});



function isHigh(guess, correctAnswer){
    if (guess > correctAnswer){
        return +1;
    }
}

test('isHigh function', function(assert){

//arrange

    const guess = 10;
    const correctAnswer = 5;
    const expected = +1;
    
    //act
    const isHighResult = isHigh(guess, correctAnswer);

    //assert
    assert.equal(isHighResult, expected);
});


function isEqual(guess, correctAnswer){
    if (guess === correctAnswer){
        return 0;
    }
}

test('isEqual function', function(assert){

    //arrange
    const guess = 12;
    const correctAnswer


    //act



    //assert


})