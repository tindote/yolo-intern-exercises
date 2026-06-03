/**
 * Shuffle array element
 * 1. Handle array empty 
 * 2. Loop array from last index, each time random an index from 0 to currentIndex - 1
 * 3. Swap two elements
 * 4. Return array
 * @param {Array} arr need to shuffle
 * @returns {Array} array after shuffle
 */
const floorNumber = require("../../utils/src/floorNumber");
function shuffleArray(arr) {
    // Clone input 
    let result = arr;
    // Handle empty case
    if (result.length === 0) {
        return [];
    }

    // Loop array from last index
    for (let i = result.length - 1; i > 0; i--) {
        let randomIndex = floorNumber(Math.random() * i);
        let temp = result[i];
        result[i] = result[randomIndex];
        result[randomIndex] = temp;
    }

    return result;
}



module.exports = shuffleArray;
