/**
 * Floors a number to the nearest integer less than or equal to the given number.
 * 1. Validate input is a number    
 * 2. If the number > 0
 */
const validateNumberType = require("./isNumber");
function floorNumber(num) {
    validateNumberType(num);
    if (num > 0) {
        return num - (num % 1);
    } else {
        return num - (num % 1) - (num % 1 === 0 ? 0 : 1);
    }
}
module.exports = floorNumber;