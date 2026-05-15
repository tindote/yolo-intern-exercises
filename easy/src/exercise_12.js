/**
 * Calculates the average value of an array of numbers.
 * 1. Handle non-array input case
 * 2. Handle empty array case
 * 3. Validate input is an array of numbers
 * 4. Iterate through the array to calculate the sum of numbers
 * 5. Divide the sum by the length of the array to get the average
 * 6. Return the average value
 * @param {number[]} array - The array of numbers.
 * @returns {number|null} The average value of the array, or null if the array is empty.
 */
const validateNumberArray = require("../../utils/validation/isNumberArray");
const isArray = require("../../utils/validation/isArray");
function calculateAverageValueOfArray(array) {
    // Step 1: handle non-array input case
    if (!isArray(array)) {
        throw new TypeError("Input must be an array");
    }
    
    // Step 2: handle empty array case
    if (array.length === 0) {
        return null; // Return null for empty array
    }

    // Step 3: validate input is an array of numbers
    validateNumberArray(array);

    // Step 4: calculate the sum of numbers
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    // Step 5: divide the sum by the length of the array to get the average
    const average = sum / array.length;

    // Step 6: return the average value
    return average;
}
