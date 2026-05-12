function subArray(arr,start,end) {
    let result = [];  
    for(let i = start; i<=end;i++){
        result.push(arr[i]);
    }  
    return result;
}       
const arr = [1, 2, 3, 4, 5];
const start = 1;
const end = 3;
console.log(subArray(arr, start, end));
