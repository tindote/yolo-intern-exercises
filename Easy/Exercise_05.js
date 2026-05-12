function countEven(data) {
    var count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 != 0) {
            count += 1;
        }
    }
    return count;
}

data = [1, 3, 6, 3, 7, 9, 8, 0, 11, 32, 43];
console.log(countEven(data));