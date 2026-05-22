/**
 * Checks if a number is an integer
 * 
 * @param {number} number 
 */
const isNumber = require("./isNumber");
function isInteger(number) {
    if(!isNumber(number)){
        return false;
    }
    return number % 1 === 0;
}
module.exports = isInteger;