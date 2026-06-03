const testFunction = require("../src/isPrime.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= PRIME NUMBERS =================
    { name: "PRIME: 2", function: testFunction, input: [2], expected: true },
    { name: "PRIME: 3", function: testFunction, input: [3], expected: true },
    { name: "PRIME: 5", function: testFunction, input: [5], expected: true },
    { name: "PRIME: 7", function: testFunction, input: [7], expected: true },
    { name: "PRIME: 97", function: testFunction, input: [97], expected: true },

    // ================= NON-PRIME NUMBERS =================
    { name: "NON-PRIME: 4", function: testFunction, input: [4], expected: false },
    { name: "NON-PRIME: 6", function: testFunction, input: [6], expected: false },
    { name: "NON-PRIME: 9", function: testFunction, input: [9], expected: false },
    { name: "NON-PRIME: 25", function: testFunction, input: [25], expected: false },
    { name: "NON-PRIME: 100", function: testFunction, input: [100], expected: false },

    // ================= EDGE CASES =================
    { name: "EDGE: 1", function: testFunction, input: [1], expected: false },
    { name: "EDGE: 0", function: testFunction, input: [0], expected: false },
    { name: "EDGE: -1", function: testFunction, input: [-1], expected: false },
    { name: "EDGE: -17", function: testFunction, input: [-17], expected: false },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: prime 997", function: testFunction, input: [997], expected: true },
    { name: "LARGE: non-prime 1000", function: testFunction, input: [1000], expected: false },

    // ================= INVALID INPUTS =================
    { name: "INVALID: decimal number", function: testFunction, input: [3.14], expected: "Input must be an integer", expectThrow: true },
    { name: "INVALID: NaN", function: testFunction, input: [NaN], expected: "Input must be an integer", expectThrow: true },
    { name: "INVALID: Infinity", function: testFunction, input: [Infinity], expected: "Input must be an integer", expectThrow: true },
    { name: "INVALID: string", function: testFunction, input: ["17"], expected: "Input must be an integer", expectThrow: true },
    { name: "INVALID: boolean", function: testFunction, input: [true], expected: "Input must be an integer", expectThrow: true },
    { name: "INVALID: null", function: testFunction, input: [null], expected: "Input must be an integer", expectThrow: true },
    { name: "INVALID: undefined", function: testFunction, input: [undefined], expected: "Input must be an integer", expectThrow: true },
    { name: "INVALID: object", function: testFunction, input: [{}], expected: "Input must be an integer", expectThrow: true },
    { name: "INVALID: array", function: testFunction, input: [[1, 2, 3]], expected: "Input must be an integer", expectThrow: true }

];

runTestcases(testCases, __filename);