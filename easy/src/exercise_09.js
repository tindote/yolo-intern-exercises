/**
 * Gets the remainder of a division operation without using the % operator.
 * 
 * 1. Validate inputs must be numbers
 * 2. Handle division by zero case
 * 3. Handle negative dividend or divisor cases
 * 4. Calculate quotient using integer division
 * 5. Calculate remainder using the formula: remainder = dividend - (quotient * divisor)
 * 6. Return the remainder
 * @param {number} dividend - The number to be divided.
 * @param {number} divisor - The number to divide by.
 * @returns {number} The remainder of the division.
 */

const isNumber = require("../../utils/validation/isNumber");
function getRemainder(dividend, divisor) {
    // Step 1: validate inputs
    if (!isNumber(dividend) || !isNumber(divisor)) {
        throw new TypeError("Both inputs must be numbers");
    }

    // Step 2: handle division by zero
    if (divisor === 0) {
        throw new Error("Cannot divide by zero");
    }

    // Step 3: handle negative cases
    const isNegativeDividend = dividend < 0;
    const isNegativeDivisor = divisor < 0;

    // Convert to positive for calculation
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    // Step 4: calculate quotient using integer division
    const quotient = Math.floor(dividend / divisor);

    // Step 5: calculate remainder using the formula
    let remainder = dividend - (quotient * divisor);

    // Step 6: adjust sign of remainder based on input signs
    if (isNegativeDividend && !isNegativeDivisor) {
        remainder = -remainder;
    } else if (!isNegativeDividend && isNegativeDivisor) {
        remainder = -remainder;
    }

    return remainder;
}
