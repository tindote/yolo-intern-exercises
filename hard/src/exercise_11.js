/**
 * Return last digit that is not zero from n!.
 * 1. Handle negative input case.
 * 2. Handle input is 0 or 1.
 * 3. Loop from 2 to number, each time check if number is devisible to 5, then add number / 5 to count.
 * 4. Return number. 
 * 
 * @param {number} number input
 * @returns {number} last digit thats is not zero
 */
function lastNonZeroDigitInFactory(number) {
    // Handle negative
    if(number < 0){
        throw new Error("Cannot factorial negative number");
    }

    // Handle input is 0 or 1
    if(number < 1){
        return 1;
    }

    let result = 1;
    // Loop from 2 to number
    for(let i = 2; i <= number; i++){
        result *= i;
        while(result % 10 === 0){
            result = result / 10;
        }
        result = result % 10000;
    }
    return result % 10;
}
module.exports = lastNonZeroDigitInFactory;
