const validateNumberArray = require("./validateNumberArray");
const isInteger = require("./isInteger");
function validateIntegerArray(array){
    validateNumberArray(array);
    for(element of array){
        if(!isInteger(element)){
            throw new TypeError("All element of array must be integer");
        }
    }
}
module.exports = validateIntegerArray;