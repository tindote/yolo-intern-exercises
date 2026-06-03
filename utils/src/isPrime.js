/**
 * Checks if a number is prime.
 * 1. Validate input is a integer number
 * 2. Check if the number is less than or equal to 1 (not prime)
 * 3. Check if the number is less than or equal to 3 (prime)
 * 4. Check if the number is divisible by 2 or 3 (not prime)
 * 5. Check for factors from 5 to the square root of the number
 * 6. If any factor is found, return false (not prime)
 * 7. If no factors are found, return true (prime)  
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
const isInteger = require('../src/isInteger');

function isPrime(number) {
    // Step 1: validate input is an integer
    if (!isInteger(number)) {
        throw new Error("Input must be an integer");
    }
    // Step 2: check if the number is less than or equal to 1 (not prime)
    if (number <= 1) {
        return false;
    }
    // Step 3: check if the number is less than or equal to 3 (prime)
    if (number <= 3) {
        return true;
    }
    // Step 4: check if the number is divisible by 2 or 3 (not prime)
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    // Step 5: check for factors from 5 to the square root of the number
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    // Step 6: if no factors are found, return true (prime)
    return true;
}

module.exports = isPrime;