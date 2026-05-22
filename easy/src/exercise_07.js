/**
 * Sums all odd numbers in an array.
 * @param {number[]} array - An array of integers.
 * @returns {number} The sum of all odd numbers in the array.
 */
const sumByRule = require("../../utils/sumElementOfArrayByRule");
const validateIntegerArray = require("../../utils/validateIntegerArray");
function sumOddNumbersInArray(array) {
    validateIntegerArray(array);
    return sumByRule(array, (num) => num % 2 !== 0);
}

module.exports = sumOddNumbersInArray;