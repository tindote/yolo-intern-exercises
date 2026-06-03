/**
 * Sums the elements in an array that satisfy a given condition.
 * 1. Handle empty array case by returning 0.
 * 2. Iterate through the array and apply the rule function to each element.
 * 3. If the rule function returns true, add the element to the sum.
 * 4. Return the final sum. 
 * @param {number[]} array - An array of numbers.
 * @param {function} ruleFn - A function that takes a number and returns a boolean.
 * @returns {number} The sum of elements that satisfy the condition.
 */
function sumByRule(array, ruleFn) {
    // Handle empty array case
    if (array.length === 0) {
        return 0;
    }
    // Iterate through the array and apply the rule function to each element
    let sum = 0;
    for (const num of array) {
        if (ruleFn(num)) {
            sum += num;
        }
    }
    return sum;
}

module.exports = sumByRule;