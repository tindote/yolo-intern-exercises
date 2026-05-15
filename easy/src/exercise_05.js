/**
 * Counts the number of odd numbers in an array.
 * 1: Handle non-array input case
 * 2: Handle empty array case
 * 3: Validate input is an integer array
 * 4: Iterate through the array and count odd numbers
 * 5: Return the count of odd numbers
 * 
 * @param {number[]} array 
 * @return {number} The count of odd numbers in the array.
 */

const validateIntegerArray = require("../../utils/validation/isIntegerArray");
const isEven = require("../../utils/common/isEven");
const isArray = require("../../utils/validation/isArray");

function countOddNumbersInArray(array) {
    // Step 1: handle non-array input case
    if (!isArray(array)) {
        throw new TypeError("Input must be an array");
    }
    // Step 2: handle empty array case
    if (array.length === 0) {
        return 0;
    }

    // Step 3: validate input is an integer array
    validateIntegerArray(array);
    // Step 4: count odd numbers
    let oddCount = 0;
    for (const num of array) {  
        if (!isEven(num)) {
            oddCount++;
        }
    }
    // Step 5: return the count of odd numbers
    return oddCount;
}