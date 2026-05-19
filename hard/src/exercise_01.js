/**
 * Reverses the characters in each word of a given string.
 * 1. Handle empty string case: if the input string is empty, return an empty string.
 * 2. Loop through each character in the string and create two temporary variables to control the reversal.
 * 3. When a space is encountered, reverse the characters in the current word by looping from the end to the beginning.
 * 4. After the loop, reverse the characters in the last word and append it to the result string.
 * 5. Return the final string with characters in each word reversed.
 * @param {string} str - The input string.
 * @returns {string} The string with characters in each word reversed.
 */

function reverseCharInWordsOfString(str) {
    // Handle empty string case
    if (str.length === 0) {
        return "";
    }
    let result = "";
    let wordStart = 0;
    
    // Loop through each character in the string and create two temporary variables to control the reversal
    for (let i = 0; i < str.length; i++) {
        // When a space is encountered, reverse the characters in the current word by looping from the end to the beginning
        if (str[i] === " ") {
            for (let j = i - 1; j >= wordStart; j--) {
                result += str[j];
            }
            result += " ";
            wordStart = i + 1;
        }
        // After the loop, reverse the characters in the last word and append it to the result string
        if (i === str.length - 1) {
            for (let j = i; j >= wordStart; j--) {
                result += str[j];
            }
        }
    }
    return result;
}