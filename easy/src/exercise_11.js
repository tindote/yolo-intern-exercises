/**
 * Finds the minimum number in an array.
 * 1. Handle empty array case
 * 2. Iterate through the array to find the minimum number
 * 3. Return the minimum number
 * @param {number[]} arr - The array of numbers.
 * @returns {number|null} The minimum number in the array, or null if the array is empty.
 */
const findByRule = require("../../utils/findByRule");
const validateNumberArray = require("../../utils/validateNumberArray");
function findMinNumberInArray(arr) {
    validateNumberArray(arr);  
    return findByRule(arr, (current, min) => current < min);
}

module.exports = findMinNumberInArray;