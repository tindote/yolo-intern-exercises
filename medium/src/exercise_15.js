/**
 * Sums the digits of a given integer.
 * 1. Handle negative integers by taking the absolute value of the input integer.
 * 2. Get remainder of the integer when divided by 10 to extract the last digit, and add it to a running total.
 * 3. Divide the integer by 10 and repeat the process until the integer is reduced to 0.
 * 4. Return the total sum of the digits.
 * @param {number} integer - The integer whose digits are to be summed.
 * @returns {number} The sum of the digits.
 */
const absNumber = require('../../utils/absNumber'); 
const floorNumber = require('../../utils/floorNumber');

function sumDigitsInInteger(integer) {
    // Handle negative integers by taking the absolute value of the input integer
    integer = absNumber(integer);
    let sum = 0;
    // Get remainder of the integer when divided by 10 to extract the last digit, and add it to a running total
    while (integer > 0) {
        sum += integer % 10;
        // Divide the integer by 10 and repeat the process until the integer is reduced to 0
        integer = floorNumber(integer / 10);
    }
    return sum;
}

module.exports = sumDigitsInInteger;