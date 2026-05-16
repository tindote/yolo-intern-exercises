/**
 * Counts the number of elements in an array that satisfy a given rule.
 * 1. Iterate through the array and apply the rule function to each element
 * 2. If the rule function returns true, increment the count
 * 3. Return the final count
 * @param arr - The array to iterate over.
 * @param ruleFn - The function that defines the rule for counting.
 * @returns The count of elements that satisfy the rule.
 */
function countByRule(arr, ruleFn) {
    if (arr.length === 0) {
        return 0;
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (ruleFn(arr[i])) {
            count++;
        }
    }

    return count;
}

module.exports = countByRule;