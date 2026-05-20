/**
 * Count how many time string A appear in String B.   
 * 1. Handle empty case:
 *      - if strA is empty, return -1;
 *      - if strB is empty, return 0;
 * 2. Loop through arrB, if arrB[index] === arrA[0], start to scan by loop from index to index + length of arrA, if all match, increase count.
 * 3. Return count.
 * @param {String} strA String need to count
 * @param {String} strB Where to find string A
 * @returns {number} count time String A appear in String B
 */

function countStringInString(strA, strB){
    // Handle empty case
    if(strA.length === 0){
        return -1;
    }
    if(strB.length === 0){
        return 0;
    }

    let count = 0;

    // Loop through strB
    for(let i = 0; i < strB.length - strA.length + 1; i++){
        if (strB[i] === strA[0]){
            let indexA = 1;
            for (let j = i + 1; j < i + strA.length; j++){
                if (strB[j] !== strA[indexA]){
                    count --;
                    break;
                }
                indexA ++;
            }
            count ++;
        }
    } 
    return count;
}   

