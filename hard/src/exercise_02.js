/**
 * Generates a random number within a specified range.
 * 
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive), max > min.
 * @returns {number} A random number between min and max.
 */
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
module.exports = randomRange;
