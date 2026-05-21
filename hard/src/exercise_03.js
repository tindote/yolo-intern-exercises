/**
 * Merges two sorted arrays in ascending order.
 * 1. Create result array.
 * 2. Compare elements from both arrays.
 * 3. Push smaller element into result.
 * 4. Repeat until one array is exhausted.
 * 5. Push remaining elements.
 * 6. Return result.
 * @param {number[]} arrA - The first sorted array.
 * @param {number[]} arrB - The second sorted array.
 * @returns {number[]} The merged sorted array.
 */

const connectSortedArraysByRule = require("../../utils/connectSortedArraysByRule");
function mergeSortedArraysAsc(arrA, arrB) {
    return connectSortedArraysByRule(arrA, arrB, (a, b) => a - b < 0);

}

module.exports = mergeSortedArraysAsc;
