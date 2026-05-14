function shuffleArray(arr) {
    const result = arr.slice(); // copy mảng để không mutate input

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        // swap
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}
function runTest() {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const output = shuffleArray(input);

    console.log("====================================");
    console.log("SHUFFLE ARRAY TEST");
    console.log("====================================");

    console.log("Input :", input);
    console.log("Output:", output);

    console.log("====================================");
}

runTest();
module.exports = { shuffleArray};
