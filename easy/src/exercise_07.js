/**
 * Sums all odd numbers in an array.
 * @param {number[]} array - An array of integers.
 * @returns {number} The sum of all odd numbers in the array.
 */
const sumByRule = require("../../utils/sumByRule");
function sumOddNumbersInArray(array) {
    return sumByRule(array, (num) => num % 2 !== 0);
}

