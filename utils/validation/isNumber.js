/**
 * Checks if a value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a number, false otherwise.
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
module.exports = isNumber;