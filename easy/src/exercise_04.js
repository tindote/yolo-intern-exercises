/**
 * Counts the number of even numbers in an array.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The count of even numbers.
 */
const countByRule = require("../../utils/countByRule.js");

function countEvenNumbers(numbers) {
    return countByRule(numbers, (num) => num % 2 === 0);
}

module.exports = countEvenNumbers;