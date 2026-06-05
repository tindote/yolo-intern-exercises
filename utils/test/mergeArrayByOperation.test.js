const testFunction = require("../src/mergeArrayByOperation.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    { name: "BASIC: add two arrays", function: testFunction, input: [[1, 2, 3], [4, 5, 6], (a, b) => a + b], expected: [5, 7, 9] },
    { name: "BASIC: subtract two arrays", function: testFunction, input: [[10, 20, 30], [1, 2, 3], (a, b) => a - b], expected: [9, 18, 27] },

    { name: "MULTIPLY: product arrays", function: testFunction, input: [[1, 2, 3], [2, 3, 4], (a, b) => a * b], expected: [2, 6, 12] },
    { name: "DIVIDE: divide arrays", function: testFunction, input: [[10, 20, 30], [2, 4, 5], (a, b) => a / b], expected: [5, 5, 6] },

    { name: "EDGE: empty arrays", function: testFunction, input: [[], [], (a, b) => a + b], expected: [] },

    { name: "NEGATIVE: negative numbers", function: testFunction, input: [[-1, -2, -3], [1, 2, 3], (a, b) => a + b], expected: [0, 0, 0] },

    { name: "DECIMAL: floating numbers", function: testFunction, input: [[1.5, 2.5], [0.5, 1.5], (a, b) => a + b], expected: [2, 4] },

    { name: "SAME: identical arrays", function: testFunction, input: [[5, 5, 5], [5, 5, 5], (a, b) => a - b], expected: [0, 0, 0] },

    { name: "CUSTOM: max function", function: testFunction, input: [[1, 10, 3], [5, 2, 8], (a, b) => Math.max(a, b)], expected: [5, 10, 8] },

    { name: "ZERO: zeros in arrays", function: testFunction, input: [[0, 0, 0], [0, 0, 0], (a, b) => a + b], expected: [0, 0, 0] }

];

runTestcases(testCases, __filename);