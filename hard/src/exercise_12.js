/**
 * Count number of zero appear in factorial of number
 * 1. Handle input < 0
 * 2. Handle input < 5
 * 3. Divide number to 5 until number < 5, take result and add to count
 * 4. return count
 * 
 * @param {number} number 
 */
function countZerosInFactorial(number) {
    // Handle input < 0
    if(number < 0){
        throw new TypeError('Cannot factory negative number');
    }

    // Handle input < 5
    if(number < 5){
        return 0;
    }

    // Loop until number < 5
    let temp = number;
    let count = 0;
    while(temp >= 5){
        temp = Math.floor(temp / 5);
        count += temp;
    }

    return count;
}
