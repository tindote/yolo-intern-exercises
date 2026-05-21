/**
 * Cuts a substring from a given string based on start index and length.
 * 1. Handle empty string case: if the input string is empty, return an empty string.
 * 2. Handle length of 0 case: if the length is 0, return an empty string.
 * 3. Handle out of bounds indices: if start or length are out of bounds, throw an error.
 * 4. Create a new string to hold the cut substring.
 * 5. Iterate from the start index for the specified length and concatenate the corresponding characters into the new string.
 * 6. Return the new string containing the cut substring.
 *
 * @param {string} str - The input string.
 * @param {number} start - The starting index.
 * @param {number} length - The number of characters to extract.
 * @returns {string} The cut substring.
 */

function cutStringByStartIndexAndLength (str, start, length) {
    // Handle empty string case
    if (str.length === 0) {
        return "";
    }

    // Handle length of 0 case
    if (length === 0) {
        return "";
    }

    // Handle out of bounds indices
    if (start < 0 || start >= str.length || length < 0 || start + length > str.length) {
        throw new Error("Invalid start index or length");
    }

    // Create a new string to hold the cut substring
    let result = "";

    // Iterate from the start index for the specified length and concatenate the corresponding characters into the new string
    for (let i = start; i < start + length; i++) {
        result += str[i];
    }

    // Return the new string containing the cut substring
    return result;
}

module.exports = cutStringByStartIndexAndLength;