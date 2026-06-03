/**
 * Finds an element in an array based on a custom rule.
 * 1. Handle empty array case
 * 2. Iterate through the array and apply the rule function to each element
 * 3. If the rule function returns true, update the result
 * 4. Return the final result
 * @param {Array} arr 
 * @param {Function} ruleFn 
 * @returns 
 */
function findByRule(arr, ruleFn) {
    if (arr.length === 0) {
        return null;
    }
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (ruleFn(arr[i], result)) {
            result = arr[i];
        }
    }

    return result;
}
module.exports = findByRule;