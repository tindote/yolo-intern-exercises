/**
 * Function compare expected value and actual value to test function
 * 1. compare primitive type, if equal, return true
 * 2. handle null case because type of null is object
 * 3. handle case one of input or all of them is not object, its a tricky way to handle primitive type but not equal
 * 4. handle case if all input is object type, check if one is array, one is not 
 * 5. get key of two objects
 * 6. handle object length mismatch
 * 7. handle key mismatch
 * 8. handle value mismatch by using recursive to handle multi array case
 * 
 * @param {value} expected 
 * @param {value} actual 
 * @returns 
 */

const isArray = require('../utils/src/isArray');
const isObject = require('../utils/src/isObject');
// Function to compare deeper
function isEqual(expected, actual) {
    // Handle strict equality for primitive values
    if (actual === expected) return true;

    // Handle null cases
    if (actual == null || expected == null) return false;

    // Handle non-object types (primitive mismatch case)
    if (isObject(actual) !== true || isObject(expected) !== true) {
        return false;
    }

    // Handle array type mismatch
    if (isArray(actual) !== isArray(expected)) return false;

    // Handle object/array key length mismatch
    const keysActual = Object.keys(actual);
    const keysExpected = Object.keys(expected);

    if (keysActual.length !== keysExpected.length) return false;

    // Handle key mismatch
    for(let i = 0; i < keysActual.length; i++){
        if(keysActual[i] !== keysExpected[i]){
            return false;
        }
    }

    // Handle recursive deep comparison of each key
    for (let key of keysActual) {
        if (!isEqual(actual[key], expected[key])) return false;
    }

    return true;
}

module.exports = isEqual;