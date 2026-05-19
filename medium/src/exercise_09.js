/**
 * Counts the number of elements that are present in both arrays.
 * 1. Handle edge cases: if either array is empty, return 0.
 * 1. Create object to store elements of arrB in unique way.
 * 2. Iterate through arrA and check if the element is present in the object created from arrB.
 * 3. Return the count of common elements.
 * @returns {number} The count of common elements between arrA and arrB.
 * @param {Array} arrA 
 * @param {Array} arrB 
 */
function countSameElements(arrA, arrB) {
    // Handle edge cases: if either array is empty, return 0
    if (arrA.length === 0 || arrB.length === 0) {
        return 0;
    }
    // Create object to store elements of arrB in unique way
    const lookup = {};
    for (const element of arrB) {
        lookup[element] = true;
    }

    // Iterate through arrA and count common elements
    let count = 0;
    for (const element of arrA) {
        if (lookup[element]) {
            count++;
        }
    }

    return count;
}

module.exports = countSameElements;