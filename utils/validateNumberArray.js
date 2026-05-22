const isNumber = require("./isNumber");
function validateNumberArray(array){
    if(!Array.isArray(array)){
        throw new TypeError("Input must be array");
    }
    for(element of array){
        if(!isNumber(element)){
            throw new TypeError("All element of array must be number");
        }
    }
}
module.exports = validateNumberArray;