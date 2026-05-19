/**
 * Finds the index of the first occurrence of str2 in str1.
 * 1. handle empty string cases: if str2 is an empty string, return 0; if str1 is an empty string, return -1.
 * 2. Iterate through str1 and check for the presence of str2 at each position.
 * 3. If a match is found, return the index of the first occurrence.
 * 4. If no match is found after iterating through str1, return -1.
 * @param {string} str1 - The string to search in.
 * @param {string} str2 - The string to search for.
 * @returns {number} The index of the first occurrence of str2 in str1, or -1 if not found.
 */
function findStringInString(str1, str2) {
    // Handle empty string cases
    if (str2 === "") {
        return 0;
    }
    if (str1 === "") {
        return -1;
    }

    // Iterate through str1 and check for the presence of str2 at each position
    for (let i = 0; i <= str1.length - str2.length; i++) {
        if (str1[i] === str2[0]) {
            for (let j = 1; j < str2.length; j++) {
                if (str1[i + j] !== str2[j]) {
                    break;
                }
                // If all characters match, return the index
                if (j === str2.length) {
                    return i;
                }
            }
        }
    }

    // If no match is found, return -1
    return -1;
}