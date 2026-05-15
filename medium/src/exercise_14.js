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