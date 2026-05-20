/**
 * Returns a random value between 0 and the given value (exclusive).
 * 1. Use the Math.random() function to generate a random number between 0 (inclusive) and 1 (exclusive).
 * 2. Multiply the random number by the given value to scale it to the desired range.
 * 3. Return the resulting random number.
 * @param {number} a number  
 * @returns {number} A random number between 0 and value.
 */
function getRandomValueFromZero(value) {
    // Generate and return the random value
    return Math.random() * value;
}