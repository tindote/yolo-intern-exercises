/**
 * Cuts a substring from a given string based on start and end indices.
 * 1. Handle empty string case: if the input string is empty, return an empty string.
 * 2. Handle out of bounds indices: if start or end indices are out of bounds, throw an error.
 * 3. Create a new string to hold the cut substring.
 * 4. Iterate from the start index to the end index and concatenate the corresponding characters into the new string.
 * 5. Return the new string containing the cut substring.
 * 
 * @param {string} str - The input string.
 * @param {number} start - The starting index.
 * @param {number} end - The ending index.
 * @returns {string} The cut substring.
 */
function cutStringByStartAndEndIndex (str, start, end) {
    // Handle empty string case
    if (str.length === 0) {
        return "";
    }
    // Handle out of bounds indices
    if (start < 0 || end > str.length || start > end) {
        throw new Error("Invalid start or end index");
    }

    // Create a new string to hold the cut substring
    let result = "";

    // Iterate from the start index to the end index and concatenate the corresponding characters into the new string
    for (let i = start; i < end; i++) {
        result += str[i];
    }

    // Return the new string containing the cut substring
    return result;
}

module.exports = cutStringByStartAndEndIndex;