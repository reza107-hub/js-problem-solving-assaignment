/* 
The function isLGSeven takes a single argument number and checks if it is a valid number. If it is not, it returns a string "Input a valid number". If it is a valid number, the function calculates the difference between the number and 7. If the difference is less than 7, it returns the difference. Otherwise, it returns double the input number. 
*/
function isLGSeven(number){
    if (typeof number != 'number'){
        return 'Input a valid number'
    }

    let diff = number - 7;
    if (diff < 7){
        return diff;
    }
    else {
        return number * 2;
    }
}

/* console.log(isLGSeven(5)); */