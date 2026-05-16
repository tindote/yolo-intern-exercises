/**
 * Sorts an array based on a custom rule function.
 * 1. Handle empty array case
 * 2. Use quickSort method with a custom comparator that applies the rule function
 * 3. Return the sorted array
 * @param {Array} array - The array to sort.
 * @param {String} rule - The string that defines the sorting rule. It can be "tăng" for ascending order or "giảm" for descending order.
 * @returns {Array} The sorted array.
 */
const floorNumber = require("../../utils/floorNumber");
const sortByRule = require("../../utils/sortByRule");
function sortByRule(array, rule) {
    // Handle empty array case
    if (array.length === 0) {
        return array;
    }
    
    // Handle array with only one element case
    if (array.length === 1) {
        return array;
    }

    // Use quickSort method with a custom comparator that applies the rule function
    if (rule === "tăng") {
        return sortByRule(array, (element, pivot) => element - pivot);
    } else if (rule === "giảm") {
        return sortByRule(array, (element, pivot) => pivot - element);
    }
}
