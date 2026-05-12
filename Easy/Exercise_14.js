function findIndex(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}   

var data = [1, 3, 6, 3, 7, 9, 8, 0, 11, 32, 43];
console.log(findIndex(data, 7));