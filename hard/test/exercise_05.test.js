const testFunction = require("../src/exercise_05.js");
const runTestcases = require('../../lib/src-lib/runTestcases.js');

const testCases = [

    // ================= BASIC CASES =================
    { name: "BASIC: merge descending arrays into ascending", function: testFunction, input: [[9, 7, 5], [8, 6, 4]], expected: [4, 5, 6, 7, 8, 9] },
    { name: "BASIC: merge [6,5,4] and [3,2,1]", function: testFunction, input: [[6, 5, 4], [3, 2, 1]], expected: [1, 2, 3, 4, 5, 6] },

    // ================= EDGE CASES =================
    { name: "EDGE: both arrays empty", function: testFunction, input: [[], []], expected: [] },
    { name: "EDGE: first array empty", function: testFunction, input: [[], [3, 2, 1]], expected: [1, 2, 3] },
    { name: "EDGE: second array empty", function: testFunction, input: [[3, 2, 1], []], expected: [1, 2, 3] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: merge duplicate values", function: testFunction, input: [[5, 4, 4], [4, 3, 3]], expected: [3, 3, 4, 4, 4, 5] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: merge negative values", function: testFunction, input: [[-1, -3, -5], [0, -2, -4]], expected: [-5, -4, -3, -2, -1, 0] },

    // ================= MIXED VALUES =================
    { name: "MIXED: merge positive and negative", function: testFunction, input: [[10, 0, -10], [5, -5, -15]], expected: [-15, -10, -5, 0, 5, 10] },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: merge decimal arrays", function: testFunction, input: [[3.3, 2.2], [2.5, 1.1]], expected: [1.1, 2.2, 2.5, 3.3] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: merge large numbers", function: testFunction, input: [[3000000, 2000000], [2500000, 1000000]], expected: [1000000, 2000000, 2500000, 3000000] },

    // ================= DIFFERENT LENGTHS =================
    { name: "LENGTH: arrays with different sizes", function: testFunction, input: [[9, 7, 5, 3], [8]], expected: [3, 5, 7, 8, 9] },

    // ================= IDENTICAL ARRAYS =================
    { name: "IDENTICAL: merge identical arrays", function: testFunction, input: [[3, 2, 1], [3, 2, 1]], expected: [1, 1, 2, 2, 3, 3] }

];

runTestcases(testCases, __filename);