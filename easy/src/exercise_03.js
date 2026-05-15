/**
 * Check parity relationship between two numbers
 *
 * 1. Validate inputs must be numbers
 * 2. Determine parity of each number
 * 3. Compare parity results
 * 4. Return parity relationship
 *
 * @param {number} firstNumber - first number
 * @param {number} secondNumber - second number
 * @returns {string} parity relationship result
 */

function checkParity(firstNumber, secondNumber) {

    // Step 1: validate input
    if (
        typeof firstNumber !== "number" ||
        typeof secondNumber !== "number"
    ) {
        throw new TypeError("Both inputs must be numbers");
    }

    // Step 2: determine parity
    const isFirstEven = firstNumber % 2 === 0;
    const isSecondEven = secondNumber % 2 === 0;

    // Step 3: compare parity
    if (isFirstEven && isSecondEven) {
        return "Both numbers are even";
    }

    if (!isFirstEven && !isSecondEven) {
        return "Both numbers are odd";
    }

    // Step 4: mixed parity
    return "One even and one odd";
}

module.exports = checkParity;