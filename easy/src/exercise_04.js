/**
 * Counts the number of even numbers in an array.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The count of even numbers.
 */
const countByRule = require("../../utils/src/countByRule.js");
const validateIntegerArray = require("../../utils/src/validateIntegerArray.js")
function countEvenNumbers(numbers) {
    validateIntegerArray(numbers);
    return countByRule(numbers, (num) => num % 2 === 0);
}

module.exports = countEvenNumbers;