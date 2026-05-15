/**
 * Check parity relationship between two integers
 *
 * 1. Validate inputs must be numbers
 * 2. Validate inputs must be integers
 * 3. Determine parity of each number
 * 4. Compare parity results
 * 5. Return parity relationship
 *
 * @param {number} firstNumber - first integer
 * @param {number} secondNumber - second integer
 * @returns {string} parity relationship result
 */

function checkParity(firstNumber, secondNumber) {

    // Step 1: validate input type
    if (
        typeof firstNumber !== "number" ||
        typeof secondNumber !== "number"
    ) {
        throw new TypeError("Both inputs must be numbers");
    }

    // Step 2: validate integer inputs
    if (
        !Number.isInteger(firstNumber) ||
        !Number.isInteger(secondNumber)
    ) {
        throw new Error("Both inputs must be integers");
    }

    // Step 3: determine parity
    const isFirstEven = firstNumber % 2 === 0;
    const isSecondEven = secondNumber % 2 === 0;

    // Step 4: compare parity
    if (isFirstEven && isSecondEven) {
        return "Both numbers are even";
    }

    if (!isFirstEven && !isSecondEven) {
        return "Both numbers are odd";
    }

    // Step 5: mixed parity
    return "One even and one odd";
}

