/* 
Problem-1

The function takes a positive number as input. If the input is a negative number or a string, it returns the message 'Input a valid positive number'. If the input is correct, it performs a mathematical operation.

*/
function mindGame(number) {
    if (number < 0 || typeof number != "number") {
      return "Input a valid positive number";
    }
  
    let multiplyResult = number * 3;
    let addingResult = multiplyResult + 10;
    let divideResult = addingResult / 2;
    let finalResult = divideResult - 5;
    return finalResult;
  }
  
  /* 
  Problem - 2
  
  The function will return 'Even' or 'Odd' based on the number of characters in the input string. If there is an error in the input, it will display a message "Input must be a valid string".
  */
  
  function evenOdd(string) {
    if (typeof string != "string" || string.length == 0) {
      return "Input must be a valid string";
    }
  
    if (string.length % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
  /* 
  Problem -3
  
  The function isLGSeven takes a single argument number and checks if it is a valid number. If it is not, it returns a string "Input a valid number". If it is a valid number, the function calculates the difference between the number and 7. If the difference is less than 7, it returns the difference. Otherwise, it returns double the input number. 
  */
  function isLGSeven(number) {
    if (typeof number != "number") {
      return "Input a valid number";
    }
  
    let diff = number - 7;
    if (diff < 7) {
      return diff;
    } else {
      return number * 2;
    }
  }
  
  /* 
  Problem -4
  
  This function takes in an array of numbers and returns the number of negative numbers (bad data) in the array. If the input is not an array or contains any non-numeric values, the function returns an error message.
  */
  
  function findingBadData(array) {
    if (!Array.isArray(array)) {
      return "Input contain must be an array";
    }
    let badData = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] != "number") {
        return "Input contains invalid data";
      }
      if (array[i] < 0) {
        badData++;
      }
    }
    return badData;
  }
  
  /* 
  Problem - 5
  
  This function calculates the total number of diamonds a person has, based on the number of gems they have of three different types. If any of the input parameters are not numbers, the function will return an error message of "Invalid Input".
  */
  function gemsToDiamond(gem1, gem2, gem3) {
    if (
      typeof gem1 !== "number" ||
      typeof gem2 !== "number" ||
      typeof gem3 !== "number"
    ) {
      return "Invalid Input";
    }
    const firstValueConverterToDiamond = 21;
    const secondValueConverterToDiamond = 32;
    const thirdValueConverterToDiamond = 43;
  
    let totalDiamond1 = gem1 * firstValueConverterToDiamond;
    let totalDiamond2 = gem2 * secondValueConverterToDiamond;
    let totalDiamond3 = gem3 * thirdValueConverterToDiamond;
  
    let totalDiamond = totalDiamond1 + totalDiamond2 + totalDiamond3;
  
    if (totalDiamond > 1000 * 2) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  }
  