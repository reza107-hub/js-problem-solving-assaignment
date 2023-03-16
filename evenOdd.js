/* 
The function will return 'Even' or 'Odd' based on the number of characters in the input string. If there is an error in the input, it will display a message "Input must be a valid string".
*/

function evenOdd(string){
    if (typeof string != 'string' || string.length ==0){
        return 'Input must be a valid string'
    }


    if(string.length % 2==0){
        return 'even'
    }else {
        return 'odd'
    }

}

console.log(evenOdd('batch7'));