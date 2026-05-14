function reverseWord(word) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    return reversed;
}

function reverseCharInWords(str) {
    const words = str.split(" ");

    const result = words.map(reverseWord);

    return result.join(" ");
}

function runTest(input) {
    const output = reverseCharInWords(input);

    console.log("====================================");
    console.log("REVERSE CHAR IN WORDS TEST");
    console.log("====================================");

    console.log("Input :", input);
    console.log("------------------------------------");

    console.log("Output:", output);

    console.log("====================================\n");
}

runTest("Hello World");
runTest("JavaScript is fun");
module.exports = { reverseWord, reverseCharInWords, runTest };
