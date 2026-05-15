/**
 * Calculate power without using Math.pow
 * 
 * 1. Validate inputs
 * 2. Handle special cases
 * 3. If exponent is integer:
 *      - use fast exponentiation
 * 4. Else:
 *      - use exponential and logarithm identity
 * 5. Handle negative exponent
 * 6. Return result
 *
 * @param {number} base - base number
 * @param {number} exponent - exponent number
 * @returns {number} calculated power result
 */

function calculatePower(base, exponent) {

    // Step 1: validate input
    if (typeof base !== "number" || typeof exponent !== "number") {
        throw new TypeError("Both inputs must be numbers");
    }

    // Step 2: handle special cases
    if (base === 0 && exponent <= 0) {
        throw new Error("Invalid mathematical operation");
    }

    // Negative base with decimal exponent produces complex number
    if (base < 0 && !Number.isInteger(exponent)) {
        throw new Error(
            "Negative base with decimal exponent is not supported"
        );
    }

    // Step 3: handle exponent = 0
    if (exponent === 0) {
        return 1;
    }

    // Step 4: store negative exponent state
    const isNegativeExponent = exponent < 0;

    // Convert exponent to positive for easier calculation
    let absoluteExponent = Math.abs(exponent);

    let result;

    // Step 5: integer exponent calculation
    if (Number.isInteger(absoluteExponent)) {

        result = 1;

        let currentBase = base;
        let currentExponent = absoluteExponent;

        // Fast exponentiation
        while (currentExponent > 0) {

            // Multiply result when exponent is odd
            if (currentExponent % 2 === 1) {
                result *= currentBase;
            }

            // Square current base
            currentBase *= currentBase;

            // Reduce exponent by half
            currentExponent = Math.floor(currentExponent / 2);
        }

    } else {

        // Step 6: decimal exponent calculation
        const logarithmValue = Math.log(base);

        const exponentialInput =
            absoluteExponent * logarithmValue;

        result = Math.exp(exponentialInput);
    }

    // Step 7: restore reciprocal for negative exponent
    if (isNegativeExponent) {
        result = 1 / result;
    }

    // Step 8: return result
    return result;
}



