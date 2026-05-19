/**
 * write a function that takes a number as an argument and returns a random number between -value and value.
 * 1. Validate the input to ensure it is a non-negative number.
 * 2. Use the Math.random() function to generate a random number between 0 (inclusive) and 1 (exclusive).
 * 3. Scale the random number to the range of -value to value by multiplying it by (2 * value) and then subtracting value.
 * 4. Return the resulting random number.
 * @param {number}  a number  
 * @returns {number} A random number between -value and value.
 */
function getRandomValueIncludeNegative(value) {
    // Validate the input
    if (value < 0) {
        throw new Error("Input must be a non-negative number");
    }
    // Generate and return the random value
    return Math.random() * (2 * value) - value;
}