function countEven(data) {

    // Step 1: validate input
    if (!Array.isArray(data)) {
        throw new TypeError("Input must be an array");
    }

    let count = 0;

    // Step 2: count even numbers
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}