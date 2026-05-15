function sumOdd(data) {

    // Step 1: validate input
    if (!Array.isArray(data)) {
        throw new TypeError("Input must be an array");
    }

    let sum = 0;

    // Step 2: calculate sum of odd numbers
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 !== 0) {
            sum += data[i];
        }
    }

    return sum;
}