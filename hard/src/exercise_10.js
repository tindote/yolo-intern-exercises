/**
 * Shuffle array element
 * 1. Handle array empty 
 * 2. Loop array from last index, each time random an index from 0 to currentIndex - 1
 * 3. Swap two elements
 * 4. Return array
 * @param {Array} arr need to shuffle
 * @returns {Array} array after shuffle
 */
const floorNumber = require("../../")
function shuffleArray(arr) {
    // Handle empty case
    if(arr.length === 0){
        return [];
    }

    // Loop array from last index
    for(let i = arr.length - 1; i >= 1; i--){
        let randomIndex = Math.floor(Math.random() * )
    }
}