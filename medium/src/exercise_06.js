/**
 * Given two arrays of numbers, return a new array where each element is the result of dividing the corresponding elements of the two input arrays.
 * 1. Use the mergeArrayByOperation utility function to merge the two arrays by dividing corresponding elements.
 * 2. The operation function passed to mergeArrayByOperation should take two numbers and return their quotient, or null if the second number is zero.   
 * @param {number[]} arr1 - The first array of numbers.
 * @param {number[]} arr2 - The second array of numbers.
 * @returns {number[]} A new array where each element is the quotient of the corresponding elements in the input arrays, or null if division by zero occurs.    
 */

const mergeArrayByOperation = require('../../utils/mergeArrayByOperation');
function calculateDivideTwoArray(arr1, arr2) {
    return mergeArrayByOperation(arr1, arr2, (a, b) => b !== 0 ? a / b : null);
}

module.exports = calculateDivideTwoArray;