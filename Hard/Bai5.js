function mergeSortedArraysDecToAsc(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray.reverse();
}
let array1 = [7, 5, 3, 1];
let array2 = [12, 10, 8, 6, 4, 2];
let mergedResult = mergeSortedArraysDecToAsc(array1, array2);
console.log(mergedResult);