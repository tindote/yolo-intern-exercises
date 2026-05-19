/**
 * Connect two acsending sorted arrays and reverse it
 * @param {array} arr1 array sorted by acsending
 * @param {array} arr2 array sorted by acsending
 * @returns {array} result after connect two arrays
 */
const conectReversedSortedArraysByRule = require("../../utils/conectReversedSortedArraysByRule")
function connectSortedArraysAscToDesc(arr1, arr2) {
    return conectReversedSortedArraysByRule(arr1, arr2, (a, b) => a - b < 0);
}

