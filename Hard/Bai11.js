function countTrailingZeros(n) {
    let count = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}
console.log(countTrailingZeros(5));   
console.log(countTrailingZeros(10));  
console.log(countTrailingZeros(25));  
console.log(countTrailingZeros(100)); 