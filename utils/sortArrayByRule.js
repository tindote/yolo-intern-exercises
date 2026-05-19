/**
 * Sorts an array by using quickSort based on a custom comparison function.
 * 1. Handle empty array case
 * 2. Choose a pivot element from the array
 * 3. Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot based on the comparison function
 * 4. Recursively apply the above steps to the sub-arrays until the base case is reached (array of length 0 or 1)
 * 5. Concatenate the sorted sub-arrays and the pivot to get the final sorted array
 * @param {Array} array - The array to sort.
 * @param {Function} compareFn - The comparison function to use for sorting.
 * @returns {Array} The sorted array.
 */
const floorNumber = require("./floorNumber");
function sortByRule(array, compareFn) {
    // Handle empty array case
    if (array.length === 0) {
        return array;
    }
    // Use quickSort method with a custom comparator that applies the rule function
    let pivot = array[floorNumber(array.length / 2)];
    let left = [];
    let right = [];
    for (let i = 0; i < array.length; i++) {
        if (i === floorNumber(array.length / 2)) {
            continue;
        }
        if (compareFn(array[i], pivot) < 0) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        } 
    }
    return [...sortByRule(left, compareFn), pivot, ...sortByRule(right, compareFn)];
}

module.exports = sortByRule;