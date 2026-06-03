/**
 * Shuffer three input numbers
 * 1. Validate input type (is number)
 * 2. Create array to store all number
 * 3. Using fisher-yates algorithm to shuffer
 * 4. Return result
 * 
 * 
 * @param {number} number1
 * @param {number} number2
 * @param {number} number3
 * @returns {array} array contain three numbers after shuffering 
 */

const isNumber = require("../../utils/src/isNumber");

function shuffleThreeNumbers(number1, number2, number3) {
    // validate all number type
    if (
        !isNumber(number1) ||
        !isNumber(number2) ||
        !isNumber(number3)
    ) {
        throw new TypeError("All input must be number");
    }

    // store values in array
    const numbers = [number1, number2, number3];

    // Fisher-Yates shuffle
    for (let i = numbers.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // swap values
        [numbers[i], numbers[randomIndex]] = [
            numbers[randomIndex],
            numbers[i]
        ];
    }

    return numbers;
}

module.exports = shuffleThreeNumbers;