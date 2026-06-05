const testFunction = require("../src/exercise_03.js");
const runTestcases = require('../../lib/src-lib/runTestcases.js');

const testCases = [

    // ================= BASIC CASES =================
    { name: "BASIC: merge [1,3,5] and [2,4,6]", function: testFunction, input: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { name: "BASIC: merge [1,2,3] and [4,5,6]", function: testFunction, input: [[1, 2, 3], [4, 5, 6]], expected: [1, 2, 3, 4, 5, 6] },

    // ================= EDGE CASES =================
    { name: "EDGE: both arrays empty", function: testFunction, input: [[], []], expected: [] },
    { name: "EDGE: first array empty", function: testFunction, input: [[], [1, 2, 3]], expected: [1, 2, 3] },
    { name: "EDGE: second array empty", function: testFunction, input: [[1, 2, 3], []], expected: [1, 2, 3] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: merge duplicate values", function: testFunction, input: [[1, 2, 2], [2, 3, 3]], expected: [1, 2, 2, 2, 3, 3] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: merge negative values", function: testFunction, input: [[-5, -3, -1], [-4, -2, 0]], expected: [-5, -4, -3, -2, -1, 0] },

    // ================= MIXED VALUES =================
    { name: "MIXED: merge negative and positive", function: testFunction, input: [[-10, 0, 10], [-5, 5, 15]], expected: [-10, -5, 0, 5, 10, 15] },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: merge decimal arrays", function: testFunction, input: [[1.1, 2.2], [1.5, 3.3]], expected: [1.1, 1.5, 2.2, 3.3] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: merge large numbers", function: testFunction, input: [[1000000, 2000000], [1500000, 3000000]], expected: [1000000, 1500000, 2000000, 3000000] },

    // ================= DIFFERENT LENGTHS =================
    { name: "LENGTH: arrays with different sizes", function: testFunction, input: [[1, 3, 5, 7, 9], [2]], expected: [1, 2, 3, 5, 7, 9] },

    // ================= IDENTICAL ARRAYS =================
    { name: "IDENTICAL: merge identical arrays", function: testFunction, input: [[1, 2, 3], [1, 2, 3]], expected: [1, 1, 2, 2, 3, 3] }

];

runTestcases(testCases, __filename);