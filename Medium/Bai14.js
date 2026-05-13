function countElements(arrA, arrB) {
    let count = 0;
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            if (arrA[i] === arrB[j]) {
                count++;
            }
        }
    }
    return arrA.length-count;
}
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];
console.log(countElements(arrA, arrB)); 