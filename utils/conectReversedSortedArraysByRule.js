/**
 * Merges two sorted arrays in ascending order.
 * 1. Create result array.
 * 2. Compare elements from both arrays by rule function.
 * 3. Repeat until one array is exhausted.
 * 4. Push remaining elements.
 * 5. Return result.
 * @param {number[]} arrA - The first sorted array.
 * @param {number[]} arrB - The second sorted array.
 * @returns {number[]} The merged reversed sorted array.
 */
function connectReversedSortedArraysByRule(arrA, arrB, compareFn) {
    const lengthA = arrA.length;
    const lengthB = arrB.length;

    if (lengthA === 0) {
        return arrB.reverse();
    }

    if (lengthB === 0) {
        return arrA.reverse();
    }

    const result = new Array(lengthA + lengthB);

    let indexA = 0;
    let indexB = 0;
    let resultIndex = result.length - 1 ;

    // Merge while both arrays still have elements
    while (indexA < lengthA && indexB < lengthB) {
        if (compareFn(arrA[indexA], arrB[indexB])) {
            result[resultIndex] = arrA[indexA];
            indexA++;
        } else {
            result[resultIndex] = arrB[indexB];
            indexB++;
        }

        resultIndex--;
    }

    // Push remaining elements from arrA
    while (indexA < lengthA) {
        result[resultIndex] = arrA[indexA];
        indexA++;
        resultIndex--;
    }

    // Push remaining elements from arrB
    while (indexB < lengthB) {
        result[resultIndex] = arrB[indexB];
        indexB++;
        resultIndex--;
    }

    return result;
}
module.exports = connectReversedSortedArraysByRule;