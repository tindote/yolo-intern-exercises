/**
 * Validates that the input is an array of integers.
 * 1. Validate all elements in the array are numbers
 * 2. Validate all numbers are integers
 * 3. If any element is not an integer, throw an Error 
 * @param {number[]} numbers - The array to validate.
 * @throws {TypeError} If the input is not an array or if any element is not a number.
 * @throws {Error} If any element is not an integer.
 */
const isNumberArray = require("./isNumberArray");

function validateIntegerArray(numbers) {
    // Step 1: validate input is an array of numbers
    if (!isNumberArray(numbers)) {
        throw new TypeError("Input must be an array of numbers");
    }
    // Step 2: validate all numbers are integers
    if (!numbers.every(number => Number.isInteger(number))) {
        // Step 3: if any element is not an integer, throw an Error
        throw new Error("All elements must be integers");
    }
}

module.exports = validateIntegerArray;  