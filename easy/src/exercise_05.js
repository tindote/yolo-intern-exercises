/**
 * Counts the number of odd numbers in an array.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The count of odd numbers.
 */
const countByRule = require("../../utils/countByRule");
const validateIntegerArray = require("../../utils/validateIntegerArray");
function countOddNumbers(numbers) {
    validateIntegerArray(numbers);
    return countByRule(numbers, (num) => num % 2 !== 0);
}

module.exports = countOddNumbers;