/**
 * Reverses an array of numbers.
 * 1. handle non-array input case
 * 2. handle empty array case
 * 3. Validate input is an array of numbers
 * 4. Iterate through the array and reverse the order of elements
 * 5. Return the reversed array
 * @param {number[]} array - The array of numbers to reverse.
 * @returns {number[]} The reversed array.
 */

const isNumberArray = require("../../utils/validation/isNumberArray");
function reverseNumbericArray(array) {
    // Step 1: handle non-array input case
    if (!isArray(array)) {
        throw new TypeError("Input must be an array");
    }

    // Step 2: handle empty array case
    if (array.length === 0) {
        return [];
    }

    // Step 3: validate input is an array of numbers
    isNumberArray(array);

    // Step 4: iterate through the array and reverse the order of elements
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }

    // Step 5: return the reversed array
    return reversed;
}
