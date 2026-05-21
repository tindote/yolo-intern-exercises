/**
 * Calculates the average value of an array of numbers.
 * 1. Handle empty array case
 * 2. Iterate through the array to calculate the sum of numbers
 * 3. Divide the sum by the length of the array to get the average
 * 4. Return the average value
 * @param {number[]} array - The array of numbers.
 * @returns {number|null} The average value of the array, or null if the array is empty.
 */
function calculateAverageValueOfArray(array) {
    //handle empty array case
    if (array.length === 0) {
        return null; // Return null for empty array
    }

    //calculate the sum of numbers
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    //divide the sum by the length of the array to get the average
    const average = sum / array.length;

    //return the average value
    return average;
}
module.exports = calculateAverageValueOfArray;