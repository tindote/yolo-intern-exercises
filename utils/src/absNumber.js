/**
 * Returns the absolute value of a number.  
 * 1. Validate input is a number
 * 2. If number is negative, return its negation; otherwise, return the number itself
 * @param {number} num - The number to get the absolute value of.
 * @returns {number} The absolute value of the input number.
 * @throws {TypeError} If the input is not a number.
 */
const validateNumberType = require("./isNumber");
function absNumber(num) {
    validateNumberType(num);
    return num < 0 ? -num : num;
}    
module.exports = absNumber;