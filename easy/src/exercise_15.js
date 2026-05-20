/**
 * Calculates the factorial of a given number.
 * 1. Handle edge cases for 0 and 1
 * 2. Iterate from 2 to the given number and multiply to calculate the factorial
 * 3. Return the factorial value
 * @param {number} number - The number to calculate the factorial for.
 * @returns {number} The factorial of the given number.
 */
function calculateFactorial(number) {
    // Handle edge cases for 0 and 1
    if (number == 0 || number == 1) {
        return 1;
    }

    // Handle negative input case
    if(number < 0){
        throw new TypeError("Negative number do not have factorial");
    }

    /// Iterate from 2 to the given number and multiply to calculate the factorial
    var factorial = 1;
    for (var i = 2; i <= number; i++) {
        factorial *= i;
    }

    // Return the factorial value
    return factorial;
}

