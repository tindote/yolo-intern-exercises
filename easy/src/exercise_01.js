/**
 * Rotate 3 numbers to the right.
 * 1. Store first value temporarily
 * 2. Shift values to the left
 * 3. Return rotated result
 *
 * @param {number} number1 - first number
 * @param {number} number2 - second number
 * @param {number} number3 - third number
 * @returns {number[]} rotated array [number2, number3, number1]
 */

function rotate3Numbers(number1, number2, number3) {
    //store first value temporarily
    const temp = number1;

    //shift values to the left
    const rotated1 = number2;
    const rotated2 = number3;
    const rotated3 = temp;

    //return result
    return [rotated1, rotated2, rotated3];
}
module.exports = rotate3Numbers;