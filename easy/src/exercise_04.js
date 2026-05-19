/**
 * Counts the number of even numbers in an array.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The count of even numbers.
 */
const countByRule = require("../../utils/countByRule");

function countEvenNumbers(numbers) {
    return countByRule(numbers, (num) => num % 2 === 0);
}

