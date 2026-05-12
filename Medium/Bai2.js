function connectTwoArrays(arr1, arr2) {
    let result = [];    
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    return result;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(connectTwoArrays(arr1, arr2));
