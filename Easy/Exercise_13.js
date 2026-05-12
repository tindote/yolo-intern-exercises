function reverseArray(arr) {
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

var data = [1, 3, 6, 3, 7, 9, 8, 0, 11, 32, 43];
console.log(reverseArray(data));