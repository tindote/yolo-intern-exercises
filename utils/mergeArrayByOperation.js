/**
 * Merges two arrays by applying an operation function to corresponding elements.
 * 1. Create a new array with the same length as the input arrays.
 * 2. Iterate through the input arrays and apply the operation function to corresponding elements.
 * 3. Store the result in the new array.
 * 4. Return the merged array.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @param {Function} operationFn - The function to apply to corresponding elements.
 * @returns {Array} The merged array.
 */
function mergeArrayByOperation(array1, array2, operationFn) {
    const result = new Array(array1.length);
    for (let i = 0; i < array1.length; i++) {
        result[i] = operationFn(array1[i], array2[i]);
    }
    return result;
}
 
module.exports = mergeArrayByOperation;