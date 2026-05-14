function findAverage(array) {
    if (array.length === 0) {
        return 0; 
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

var data = [1, 3, 6, 3, 7, 9, 8, 0, 11, 32, 43];
console.log(findAverage(data));
module.exports = findAverage;
