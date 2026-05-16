/**
 * Sums the elements in an array that satisfy a given condition.
 * @param {number[]} array - An array of numbers.
 * @param {function} ruleFn - A function that takes a number and returns a boolean.
 * @returns {number} The sum of elements that satisfy the condition.
 */
function sumByRule(array, ruleFn) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (const num of array) {
        if (ruleFn(num)) {
            sum += num;
        }
    }
    return sum;
}

module.exports = sumByRule;