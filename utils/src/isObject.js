/** 
 * Function to check input is an object or not
 * 
 * @param {*} input value 
 */
function isObject(input){
    if(typeof input === 'object'){
        return true;
    }else{
        return false;
    }
}
module.exports = isObject;