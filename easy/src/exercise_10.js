/**
 * Finds the maximum number in an array.
 * 1. handle non-array input case
 * 2. Handle empty array case
 * 3. Validate input is an array of numbers
 * 4. Iterate through the array to find the maximum number
 * 5. Return the maximum number
 * @param {number[]} arr - The array of numbers.
 * @returns {number|null} The maximum number in the array, or null if the array is empty.
 */
const validateNumberArray = require("../../utils/validation/isNumberArray");
const isArray = require("../../utils/validation/isArray");

function findMaxNumberInArray(arr) {
    // Step 1: handle non-array input case
    if (!isArray(arr)) {
        throw new TypeError("Input must be an array");
    }
    // Step 2: handle empty array case
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    // Step 3: validate input is an array of numbers
    validateNumberArray(arr);
    // Step 4: find the maximum number
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    // Step 5: return the maximum number
    return max;
}