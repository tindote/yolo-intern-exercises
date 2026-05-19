/**
 * Returns a random value between 0 and the given value (exclusive).
 * 1. Validate the input to ensure it is a non-negative number.
 * 2. Use the Math.random() function to generate a random number between 0 (inclusive) and 1 (exclusive).
 * 3. Multiply the random number by the given value to scale it to the desired range.
 * 4. Return the resulting random number.
 * @param {number} a number  
 * @returns {number} A random number between 0 and value.
 */
function getRandomValueFromZero(value) {
    // Validate the input
    if (value < 0) {
        throw new Error("Input must be a non-negative number");
    }
    // Generate and return the random value
    return Math.random() * value;
}