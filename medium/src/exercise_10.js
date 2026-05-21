/**
 * Counts the number of elements that are present in one array but not in both.
 * @param {Array} arrA 
 * @param {Array} arrB 
 * @returns {number} The count of different elements between arrA and arrB.
 */
const countSameElements = require('./exercise_09');
function countDifferentElements(arrA, arrB) {
    const sameCount = countSameElements(arrA, arrB);
    return arrA.length - sameCount;
}

module.exports = countDifferentElements;