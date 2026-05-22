/**
 * Gets the remainder of a division operation without using the % operator.
 * 
 * 2. Handle division by zero case
 * 3. Handle negative dividend or divisor cases
 * 4. Calculate quotient using integer division
 * 5. Calculate remainder using the formula: remainder = dividend - (quotient * divisor)
 * 6. Return the remainder
 * @param {number} dividend - The number to be divided.
 * @param {number} divisor - The number to divide by.
 * @returns {number} The remainder of the division.
 */

const floorNumber = require("../../utils/floorNumber");
const absNumber = require("../../utils/absNumber");
const isNumber = require("../../utils/isNumber");

function getRemainder(dividend, divisor) {
    //handle input is not number
    if(!isNumber(dividend) || !isNumber(divisor)){
        throw new TypeError("Input must be number");
    }

    //handle division by zero
    if (divisor === 0) {
        throw new Error('Cannot divide by zero, provided calculation: dividend = ' + dividend + ', divisor = ' + divisor);
    }

    //store original signs for later use   
    const isDividendNegative = dividend < 0;

    //work with absolute values for easier calculation
    const absoluteDividend = absNumber(dividend);
    const absoluteDivisor = absNumber(divisor);
    
    //calculate quotient using integer division
    const quotient = floorNumber(absoluteDividend / absoluteDivisor);

    //calculate remainder using the formula: remainder = dividend - (quotient * divisor)
    let remainder = absoluteDividend - (quotient * absoluteDivisor);

    //apply the correct sign to the remainder
    if (isDividendNegative) {
        remainder = -remainder;
    }

    return remainder = Number(remainder.toFixed(10));;
}

module.exports = getRemainder;
