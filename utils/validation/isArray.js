/**
 * Validates that the input is an array.
 * 1. Validate input is an array
 * 2. If input is not an array, throw a TypeError
 * @param {*} input - The input to validate.
 * @throws {TypeError} If the input is not an array.
 */
function validateArray(input) {
    // Step 1: validate input is an array
    if (!Array.isArray(input)) {
        // Step 2: if input is not an array, throw a TypeError
        throw new TypeError("Input must be an array");
    }
}

module.exports = validateArray;