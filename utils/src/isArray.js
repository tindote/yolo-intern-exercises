/** 
 * Function to check if input is array or not
 * 
 * @param {array} array need to check
 */
function isArray(array){
    if (!Array.isArray(array)) {
        throw new TypeError("Input must be array");
    }
}

module.exports = isArray;