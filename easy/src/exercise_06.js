/**
 * Sums all even numbers in an array.
 * 1. Handle non-array input case
 * 2. Handle empty array case
 * 3. Validate input is an array of integers
 * 4. Iterate through the array and sum even numbers
 * 5. Return the sum
 * @param {number[]} array - An array of integers.
 * @returns {number} The sum of all even numbers in the array.
 */
const validateIntegerArray = require("../../utils/validation/isIntegerArray");
const isEven = require("../../utils/common/isEven");
const isArray = require("../../utils/validation/isArray");

function sumEvenNumbersInArray(array) {
    // Step 1: handle non-array input case
    if (!isArray(array)) {
        throw new TypeError("Input must be an array");
    }
    // Step 2: handle empty array case
    if (array.length === 0) {
        return 0;
    }
    // Step 3: validate input is an array of integers
    validateIntegerArray(array);
    // Step 4: sum even numbers
    let evenSum = 0;
    for (const num of array) {
        if (isEven(num)) {
            evenSum += num;
        }
    }
    // Step 5: return the sum
    return evenSum;
}