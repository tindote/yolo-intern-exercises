/**
 * Sums all odd numbers in an array.
 * 1: Handle non-array input case
 * 2: Handle empty array case
 * 3: Validate input is an array of integers
 * 4: Iterate through the array and sum odd numbers
 * 5: Return the sum
 * @param {number[]} array - An array of integers.
 * @returns {number} The sum of all odd numbers in the array.
 */
const validateIntegerArray = require("../../utils/validation/isIntegerArray");
const isEven = require("../../utils/common/isEven");
const isArray = require("../../utils/validation/isArray");

function sumOddNumbersInArray(array) {
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
    // Step 4: sum odd numbers
    let oddSum = 0;
    for (const num of array) {
        if (!isEven(num)) {
            oddSum += num;
        }
    }
    // Step 5: return the sum
    return oddSum;
}


