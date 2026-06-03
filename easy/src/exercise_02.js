/**
 * Calculate power without using Math.pow
 * 1. Handle special cases
 * 2. Determine if exponent is negative and work with absolute value
 * 3. Calculate power for positive integer exponent using fast exponentiation
 * 4. Return result
 *
 * @param {number} base - base number
 * @param {number} exponent - exponent number
 * @returns {number} calculated power result
 */

const absNumber = require("../../utils/src/absNumber");
const floorNumber = require("../../utils/src/floorNumber");
const isInteger = require("../../utils/src/isInteger");

function calculatePower(base, exponent) {
    
    // handle type error
    if(!isInteger(base) || !isInteger(exponent)){
        throw new TypeError("All input must be integer!");
    }

    // handle special cases
    if (base === 0 && exponent <= 0) {
        throw new Error('Invalid mathematical operation for base 0 and non-positive exponent provided: base = ' + base + ', exponent = ' + exponent);
    }

    // handle exponent = 0
    if (exponent === 0) {
        return 1;
    }

    // handle base = 0 with positive exponent
    if (base === 0 && exponent > 0) {
        return 0;
    }

    //  store negative exponent state
    const isNegativeExponent = exponent < 0;

    // Convert exponent to positive for easier calculation
    let absoluteExponent = absNumber(exponent);

    // integer exponent calculation
    let result;
    result = calculatePositiveIntegerPower(base,absoluteExponent);
    
    // restore reciprocal for negative exponent
    if (isNegativeExponent) {
        result = 1 / result;
    }

    // return result
    return result;
}

module.exports = calculatePower;
/**
 * Calculates the power of a base raised to an integer exponent
 * 1. Use fast exponentiation algorithm (exponentiation by squaring)
 * 2. Handle negative exponent by calculating power for positive exponent and taking reciprocal
 * @param {number} base - the base number
 * @param {number} exponent - the integer exponent
 * @returns {number} the result of base raised to the power of exponent
 */
function calculatePositiveIntegerPower(base, exponent) {
    let result = 1;
    let currentBase = base;
    let currentExponent = exponent;
    // Fast exponentiation by squaring
    while (currentExponent > 0) {
        if (currentExponent % 2 === 1) {
            result *= currentBase;
        }
        currentBase *= currentBase;
        currentExponent = floorNumber(currentExponent / 2);
    }
    return result;
}
