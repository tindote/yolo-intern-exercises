/**
 * Calculates the element-wise difference between two arrays of the same length.
 * 1. Use the mergeArrayByOperation utility function to merge the two arrays by subtracting corresponding elements.
 * 2. The operation function passed to mergeArrayByOperation should take two numbers and return their difference.
 * 
 * @param {number[]} arr1 - The first array of numbers.
 * @param {number[]} arr2 - The second array of numbers.
 * @returns {number[]} A new array where each element is the difference of the corresponding elements in the input arrays.
 */
const mergeArrayByOperation = require('../../utils/mergeArrayByOperation');
function calculateSubTwoArray(arr1, arr2) {
    return mergeArrayByOperation(arr1, arr2, (a, b) => a - b);
}