/**
 * Connect two sorted decsending arrays
 * @param {arrA} first sorted array
 * @param {arrB} second sorted array]
 * @returns {result} result after conneted two array
 */
const connectSortedArraysByRule = require("../../utils/connectSortedArraysByRule");
function connectSortedArraysDec(arrA, arrB) {
    return connectSortedArraysByRule(arrA, arrB, (a, b) => a - b > 0);
}

module.exports = connectSortedArraysDec;
