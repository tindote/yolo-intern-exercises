/**
 * Merge 2 arrays sorted in DESC order into one DESC array
 * Using two pointers technique
 */
function mergeSortedArraysDec(arr1, arr2) {
    let i = 0;
    let j = 0;

    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
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
    const array1 = [7, 5, 3, 1];
    const array2 = [12, 10, 8, 6, 4, 2];

    console.log("====================================");
    console.log("MERGE SORTED ARRAYS TEST");
    console.log("====================================");

    console.log("Array 1 (DESC):", array1);
    console.log("Array 2 (DESC):", array2);
    console.log("------------------------------------");

    const result = mergeSortedArraysDec(array1, array2);

    console.log("Merged Result (DESC):", result);

    console.log("====================================");
}

runTest();
module.exports = { mergeSortedArraysDec};
