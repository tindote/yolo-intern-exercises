function findMax(arr){
    if(arr.length == 0){
        return null;
    }
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

data = [1,3,6,3,7,9,8,0,11,32,43];
console.log(findMax(data));