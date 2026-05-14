function sumOdd(data) {
    var sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 != 0) {
            sum += data[i];
        }
    }
    return sum;
}

data = [1, 3, 6, 3, 7, 9, 8, 0, 11, 32, 43];
console.log(sumOdd(data));
module.exports = sumOdd;
