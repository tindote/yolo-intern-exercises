function lastNonZeroDigit(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;

        // loại bỏ số 0 ở cuối
        while (result % 10 === 0) {
            result = result / 10;
        }

        // giữ số nhỏ để tránh tràn
        result = result % 100000;
    }

    return result % 10;
}

console.log(lastNonZeroDigit(5));  
console.log(lastNonZeroDigit(10)); 
console.log(lastNonZeroDigit(20)); 