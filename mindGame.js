function mindGame (number){
    /* if user input negative number or a string */
    if (number < 0 || typeof number != 'number'){
        return 'Input a valid positive number'
    }

    /* if the input is ok then start these process */

    let multiplyResult = number *3;
    let addingResult  = multiplyResult  +10;
    let divideResult  = addingResult  / 2;
    let finalResult = divideResult -5;
    return finalResult;
}


console.log(mindGame(33));