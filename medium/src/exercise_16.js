/**
 * Displays the Fibonacci sequence up to a given integer.
 * 1. Validate the input to ensure it is a non-negative integer.
 * 2. Initialize the first two numbers in the Fibonacci sequence (0 and 1).
 * 3. Use a loop to generate the Fibonacci sequence until the next number exceeds the given integer.
 * 4. Store the generated Fibonacci numbers in an string and print it.
 * 
 * @param {number} integer - The upper limit for the Fibonacci sequence.
 */

function displayFibonacci(integer) {
    // Validate the input to ensure it is a non-negative integer
    if (integer < 0) {
        throw new Error("Input must be a positive integer");
    }

    // Initialize the first two numbers in the Fibonacci sequence (0 and 1)
    let a = 0, b = 1;
    let result = '';

    // Use a loop to generate the Fibonacci sequence until the next number exceeds the given integer
    while (a <= integer) {
        result += a + ' ';
        let temp = b;
        b = a + b;
        a = temp;
    }

    // Print the generated Fibonacci numbers
    return result.trim();

}

module.exports = displayFibonacci;