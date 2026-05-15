function countEvenNumbers(numbers) {

    // Step 1: validate input
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array");
    }

    // Step 2: count even numbers
    let evenCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        }
    }

    // Step 3: return result
    return evenCount;
}