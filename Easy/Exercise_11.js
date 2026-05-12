function findMin(arr) {
    if(arr.length == 0){
        return null;
    }
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

data = [1,3,6,3,7,9,8,0,11,32,43];
console.log(findMin(data));