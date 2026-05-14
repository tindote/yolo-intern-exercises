/**
 * Merge 2 arrays sorted DESC into ASC result
 * Using two pointers
 */
function mergeSortedArraysDecToAsc(arr1, arr2) {
    let i = 0;
    let j = 0;

    const result = [];

    while (i < arr1.length && j < arr2.length) {
        // vì arr giảm dần → lấy số lớn trước
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

    // reverse để ra ASC
    return result.reverse();
}

function runTest(arr1, arr2) {
    const result = mergeSortedArraysDecToAsc(arr1, arr2);

    console.log("====================================");
    console.log("MERGE SORTED ARRAYS TEST");
    console.log("====================================");

    console.log("Array 1 (DESC):", arr1);
    console.log("Array 2 (DESC):", arr2);
    console.log("------------------------------------");

    console.log("Merged (ASC):", result);

    console.log("====================================\n");
}

runTest([7, 5, 3, 1], [12, 10, 8, 6, 4, 2]);
module.exports = { mergeSortedArraysDecToAsc, runTest };
