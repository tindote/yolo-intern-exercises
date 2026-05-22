/**
 * Check parity relationship between two integers
 *
 * 1. Determine parity of each number
 * 2. Compare parity results
 * 3. Return parity relationship
 *
 * @param {number} firstNumber - first integer
 * @param {number} secondNumber - second integer
 * @returns {string} parity relationship result
 */
const isInteger = require("../../utils/isInteger");
function checkParity(firstNumber, secondNumber) {
    if(!isInteger(firstNumber) || !isInteger(secondNumber)){
        throw new TypeError("All input must be Integer!");
    }

    //determine parity
    const isFirstEven = firstNumber % 2 === 0;
    const isSecondEven = secondNumber % 2 === 0;

    //compare parity
    if (isFirstEven && isSecondEven) {
        return 'Both numbers are even';
    }

    if (!isFirstEven && !isSecondEven) {
        return 'Both numbers are odd';
    }

    //mixed parity
    return 'One even and one odd';
}
module.exports = checkParity;

