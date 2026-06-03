/**
 * Connect two descending sorted arrays and reverse it
 * @param {array} arr1 array sorted by decs
 * @param {array} arr2 array sorted by decs
 * @returns {array} result after connect two arrays
 */
const conectReversedSortedArraysByRule = require("../../utils/src/conectReversedSortedArraysByRule")
function connectSortedArraysDecToAsc(arr1, arr2) {
    return conectReversedSortedArraysByRule(arr1, arr2, (a, b) => a - b > 0);
}


module.exports = connectSortedArraysDecToAsc;
