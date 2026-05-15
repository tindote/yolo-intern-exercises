/**
 * Rotate 3 numbers to the right.
 * 
 * 1. Validate inputs must be numbers
 * 2. Store first value temporarily
 * 3. Shift values to the left
 * 4. Return rotated result
 *
 * @param {number} number1 - first number
 * @param {number} number2 - second number
 * @param {number} number3 - third number
 * @returns {number[]} rotated array [number2, number3, number1]
 */

function rotate3Numbers(number1, number2, number3) {
    // Step 1: validate input
    if (
        typeof number1 !== "number" ||
        typeof number2 !== "number" ||
        typeof number3 !== "number"
    ) {
        throw new TypeError("All inputs must be numbers");
    }

    // Step 2: rotate values
    const temp = number1;

    const rotated1 = number2;
    const rotated2 = number3;
    const rotated3 = temp;

    // Step 3: return result
    return [rotated1, rotated2, rotated3];
}
