/**
 * Merge 2 sorted arrays (ASC) into one sorted array (ASC)
 * Using two pointers technique
 */
function mergeSortedArraysAsc(arr1, arr2) {
    let i = 0;
    let j = 0;

    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function runTest() {
    const array1 = [1, 3, 5, 7];
    const array2 = [2, 4, 6, 8, 10, 12];

    console.log("====================================");
    console.log("MERGE SORTED ARRAYS TEST (ASC)");
    console.log("====================================");

    console.log("Array 1:", array1);
    console.log("Array 2:", array2);
    console.log("------------------------------------");

    const result = mergeSortedArraysAsc(array1, array2);

    console.log("Merged Result (ASC):", result);

    console.log("====================================");
}

runTest();