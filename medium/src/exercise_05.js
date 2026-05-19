const mergeArrayByOperation = require("../../utils/mergeArrayByOperation");
/**
 * Calculates the element-wise product of two arrays of the same length.
 * 1. Use the mergeArrayByOperation utility function to merge the two arrays by multiplying corresponding elements.
 * 2. The operation function passed to mergeArrayByOperation should take two numbers and return their product.
 *
 * @param {number[]} arr1 - The first array of numbers.
 * @param {number[]} arr2 - The second array of numbers.
 * @returns {number[]} A new array where each element is the product of the corresponding elements in the input arrays.
 */
function calculateProductTwoArray(arr1, arr2) {
    return mergeArrayByOperation(arr1, arr2, (a, b) => a * b);
}