/**
 * Given two arrays of numbers, return a new array where each element is the sum of the elements at the corresponding positions in the input arrays. 
 * 1. Use the mergeArrayByOperation utility function to merge the two arrays by summing corresponding elements.
 * 2. The operation function passed to mergeArrayByOperation should take two numbers and return their sum.
 */
const mergeArrayByOperation = require('../../utils/mergeArrayByOperation');

function calculateSumTwoArray(arr1, arr2) {
    return mergeArrayByOperation(arr1, arr2, (a, b) => a + b);
}

