/**
 * Finds the index of a value in an array.
 * 1. Iterate through the array to find the value
 * 2. If the value is found, return its index
 * 3. If the value is not found after iterating through the entire array, return -1
 * @param {number[]} arr - The array to search.
 * @param {number} value - The value to find.
 * @returns {number} The index of the value, or -1 if not found.
 */
const validateNumberArray = require("../../utils/src/validateNumberArray");
const isNumber = require("../../utils/src/isNumber");
function findIndex(arr, value) {
    //validate array type and element type
    validateNumberArray(arr);

    //validate value type
    if(!isNumber(value)){
        throw new TypeError("value must be a number");
    }

    // Iterate through the array to find the value
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }

    // If the value is not found after iterating through the entire array, return -1
    return -1;
}
module.exports = findIndex;