const testFunction = require("../src/connectSortedArraysByRule.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= BASIC ASCENDING =================
    { name: "BASIC: merge ascending arrays", function: testFunction, input: [[1, 3, 5], [2, 4, 6], (a, b) => a - b < 0], expected: [1, 2, 3, 4, 5, 6] },
    { name: "BASIC: small ascending arrays", function: testFunction, input: [[1, 2], [3, 4], (a, b) => a - b < 0], expected: [1, 2, 3, 4] },

    // ================= BASIC DESCENDING =================
    { name: "BASIC: merge descending arrays", function: testFunction, input: [[6, 4, 2], [5, 3, 1], (a, b) => a - b > 0], expected: [6, 5, 4, 3, 2, 1] },

    // ================= EMPTY ARRAY =================
    { name: "EDGE: arrA empty", function: testFunction, input: [[], [1, 2, 3], (a, b) => a - b < 0], expected: [1, 2, 3] },
    { name: "EDGE: arrB empty", function: testFunction, input: [[1, 2, 3], [], (a, b) => a - b < 0], expected: [1, 2, 3] },
    { name: "EDGE: both arrays empty", function: testFunction, input: [[], [], (a, b) => a - b < 0], expected: [] },

    // ================= DUPLICATE VALUES =================
    { name: "DUPLICATE: duplicate values", function: testFunction, input: [[1, 2, 2], [2, 3, 3], (a, b) => a - b < 0], expected: [1, 2, 2, 2, 3, 3] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: negative ascending arrays", function: testFunction, input: [[-5, -3, -1], [-4, -2, 0], (a, b) => a - b < 0], expected: [-5, -4, -3, -2, -1, 0] },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: decimal numbers", function: testFunction, input: [[1.1, 2.2, 3.3], [1.5, 2.5, 3.5], (a, b) => a - b < 0], expected: [1.1, 1.5, 2.2, 2.5, 3.3, 3.5] },

    // ================= UNEQUAL LENGTH =================
    { name: "LENGTH: different lengths", function: testFunction, input: [[1, 3, 5, 7, 9], [2], (a, b) => a - b < 0], expected: [1, 2, 3, 5, 7, 9] },

    // ================= SAME VALUES =================
    { name: "SAME: all elements same", function: testFunction, input: [[1, 1, 1], [1, 1], (a, b) => a - b < 0], expected: [1, 1, 1, 1, 1] }

];

runTestcases(testCases, __filename);