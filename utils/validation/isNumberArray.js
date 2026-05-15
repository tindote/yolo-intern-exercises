/**
 * Checks if the input is an array of numbers.
 * 1. Check all elements in the array are numbers
 * @param {number[]} numbers - The array to check.
 * @returns {boolean} True if the input is an array of numbers, false otherwise.
 */
function isNumberArray(numbers) {
    if (!numbers.every(number => typeof number === "number")) {
        return false;
    }

    return true;
}

module.exports = isNumberArray;