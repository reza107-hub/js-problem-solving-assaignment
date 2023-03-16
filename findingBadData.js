/* 
This function takes in an array of numbers and returns the number of negative numbers (bad data) in the array. If the input is not an array or contains any non-numeric values, the function returns an error message.
*/

function findingBadData(array){
    if (!Array.isArray(array)){
        return 'Input contain must be an array';
    }
    let badData = 0;
    for (let i=0; i < array.length; i++){
        if (typeof array[i] != 'number'){
            return 'Input contains invalid data';
        }
        if (array[i] < 0){
            badData++;
        }
    }
    return badData;
}

console.log(findingBadData([ 2, -5,0, -7, -13 ]));