/**
 * Counts the number of even numbers in an array.
 * 1. Handle empty array case
 * 2. Handle non-array input case
 * 3. Validate input is an integer array
 * 4. Iterate through the array and count even numbers
 * 5. Return the count of even numbers
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The count of even numbers.
 */

const isIntegerArray = require("../../utils/validation/isIntegerArray");
const isArray = require("../../utils/validation/isArray");

function countEvenNumbers(numbers) {
    // Step 1: validate input is an array
    if (!isArray(numbers)) {
        throw new TypeError("Input must be an array");
    }
   
    // Step 2: handle empty array case
    if (numbers.length === 0) {
        return 0;
    }
    
    // Step 3: validate input is an integer array
    if (!isIntegerArray(numbers)) {
        throw new TypeError("Input must be an array of integers");
    }

    // Step 4: count even numbers
    let evenCount = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            evenCount++;
        }   
    }

    // Step 5: return the count of even numbers
    return evenCount;
    
}
