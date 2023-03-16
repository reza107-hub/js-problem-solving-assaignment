/* 
This function calculates the total number of diamonds a person has, based on the number of gems they have of three different types. If any of the input parameters are not numbers, the function will return an error message of "Invalid Input".
*/
function gemsToDiamond(gem1,gem2,gem3){
    if (typeof gem1 !== 'number' || typeof gem2 !== 'number' || typeof gem3 !== 'number') {
        return 'Invalid Input';
      }
      const firstValueConverterToDiamond = 21;
      const secondValueConverterToDiamond = 32;
      const thirdValueConverterToDiamond = 43;
    
      let totalDiamond1 = gem1 * firstValueConverterToDiamond;
      let totalDiamond2 = gem2 * secondValueConverterToDiamond;
      let totalDiamond3 = gem3 * thirdValueConverterToDiamond;
    
      let totalDiamond= totalDiamond1 + totalDiamond2 + totalDiamond3;
    
      if (totalDiamond > (1000 *2)) {
        return totalDiamond - 2000;
      } else {
        return totalDiamond;
      }
}

/* console.log(gemsToDiamond(1,1,1)); */