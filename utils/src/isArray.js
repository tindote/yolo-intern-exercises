/** 
 * Function to check if input is array or not
 * 
 * @param {array} array need to check
 */
function isArray(array){
    if (!Array.isArray(array)) {
        return false;
    }
    return true;
}

module.exports = isArray;