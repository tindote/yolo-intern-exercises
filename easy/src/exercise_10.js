/**
 * Finds the maximum number in an array.
 * 1. Handle empty array case
 * 2. Iterate through the array to find the maximum number
 * 3. Return the maximum number
 * @param {number[]} arr - The array of numbers.
 * @returns {number|null} The maximum number in the array, or null if the array is empty.
 */
const findByRule = require("../../utils/src/findByRule");
const validateNumberArray = require("../../utils/src/validateNumberArray");
function findMaxNumberInArray(arr) { 
    validateNumberArray(arr);  
    return findByRule(arr, (current, max) => current > max);
}
module.exports = findMaxNumberInArray;