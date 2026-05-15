/**
 * Finds the minimum number in an array.
 * 1. handle non-array input case
 * 2. Handle empty array case
 * 3. Validate input is an array of numbers
 * 4. Iterate through the array to find the minimum number
 * 5. Return the minimum number
 * @param {number[]} arr - The array of numbers.
 * @returns {number|null} The minimum number in the array, or null if the array is empty.
 */

const validateNumberArray = require("../../utils/validation/isNumberArray");

function findMinNumberInArray(arr) {
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

    // Step 4: find the minimum number
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // Step 5: return the minimum number
    return min;
}