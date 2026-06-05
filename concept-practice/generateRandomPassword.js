/** 
 * Function return random password with at least one upper-case letter, one lower-case letter, one special character, one number
 * This function show what is non-determinristic fucntion, with the same input we get differences ouput and we cannot know what is the output
 * 1. validate input is integer
 * 2. validate input length >= 4
 * 3. use Math.random() to get four needed characters, push into array
 * 4. use Math.random() to get all elements left, push into array
 * 5. shuffer array
 * 6. return password by joining array
 * @param {number} length of password
 * @returns {String} password generated
 */

const isInteger = require("../utils/src/isInteger");
const shufferArray = require("../hard/src/exercise_10")
function generatePassword(length){
    //validate input 
    if(!isInteger(length)){
        throw new TypeError("Length of password must be an integer!");
    }

    if(length < 4){
        throw new Error("Length of password must be longer than 4!");
    }

    let password_arr = new Array(length);
    //get upper-case letter
    password_arr[0] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

    //get lower-case letter
    password_arr[1] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    //get special
    const special = '!@#$%^&*()_+-={}[]|:;"<>,.?/';
    let index = Math.floor(Math.random() * special.length);
    password_arr[2] = special[index];

    //get number
    password_arr[3] = Math.floor(Math.random() * 10);

    //loop to get all elements left
    for(let i = 4; i < length; i++){
        password_arr[i] = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
    }

    password_arr = shufferArray(password_arr); 
    let password_str = '';
    for(letter of password_arr){
        password_str += letter;
    }

    return password_str;
}

