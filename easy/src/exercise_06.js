/**
 * Sums all even numbers in an array.
 * @param {number[]} array - An array of integers.
 * @returns {number} The sum of all even numbers in the array.
 */
const sumByRule = require("../../utils/sumByRule");
function sumEvenNumbersInArray(array) {
    return sumByRule(array, (num) => num % 2 === 0);
}

