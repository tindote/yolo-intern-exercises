/**
 * Reverses an array of numbers.
 * 1. handle empty array case
 * 2. Iterate through the array and reverse the order of elements
 * 3. Return the reversed array
 * @param {number[]} array - The array of numbers to reverse.
 * @returns {number[]} The reversed array.
 */

function reverseNumbericArray(array) {
    //handle empty array case
    if (array.length === 0) {
        return [];
    }

    //iterate through the array and reverse the order of elements
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    
    //return the reversed array
    return reversed;
}
