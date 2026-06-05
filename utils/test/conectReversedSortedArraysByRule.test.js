const testFunction = require("../src/conectReversedSortedArraysByRule.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= BASIC ASC TO DESC =================
    { name: "BASIC: merge ascending arrays and reverse", function: testFunction, input: [[1, 3, 5], [2, 4, 6], (a, b) => a - b < 0], expected: [6, 5, 4, 3, 2, 1] },
    { name: "BASIC: merge small ascending arrays", function: testFunction, input: [[1, 2], [3, 4], (a, b) => a - b < 0], expected: [4, 3, 2, 1] },

    // ================= BASIC DESC TO ASC =================
    { name: "BASIC: merge descending arrays and reverse", function: testFunction, input: [[6, 4, 2], [5, 3, 1], (a, b) => a - b > 0], expected: [1, 2, 3, 4, 5, 6] },

    // ================= EMPTY ARRAY =================
    { name: "EDGE: arrA empty", function: testFunction, input: [[], [1, 2, 3], (a, b) => a - b < 0], expected: [3, 2, 1] },
    { name: "EDGE: arrB empty", function: testFunction, input: [[1, 2, 3], [], (a, b) => a - b < 0], expected: [3, 2, 1] },
    { name: "EDGE: both arrays empty", function: testFunction, input: [[], [], (a, b) => a - b < 0], expected: [] },

    // ================= DUPLICATE VALUES =================
    { name: "DUPLICATE: duplicate values", function: testFunction, input: [[1, 2, 2], [2, 3, 3], (a, b) => a - b < 0], expected: [3, 3, 2, 2, 2, 1] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: negative ascending arrays", function: testFunction, input: [[-5, -3, -1], [-4, -2, 0], (a, b) => a - b < 0], expected: [0, -1, -2, -3, -4, -5] },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: decimal numbers", function: testFunction, input: [[1.1, 2.2, 3.3], [1.5, 2.5, 3.5], (a, b) => a - b < 0], expected: [3.5, 3.3, 2.5, 2.2, 1.5, 1.1] },

    // ================= UNEQUAL LENGTH =================
    { name: "LENGTH: different lengths", function: testFunction, input: [[1, 3, 5, 7, 9], [2], (a, b) => a - b < 0], expected: [9, 7, 5, 3, 2, 1] },

    // ================= SAME VALUES =================
    { name: "SAME: all elements same", function: testFunction, input: [[1, 1, 1], [1, 1], (a, b) => a - b < 0], expected: [1, 1, 1, 1, 1] }

];

runTestcases(testCases, __filename);