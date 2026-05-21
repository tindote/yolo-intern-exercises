const testFunction = require("../src/exercise_06.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC CASES =================
    { name: "BASIC: merge ascending arrays into descending", input: [[1, 3, 5], [2, 4, 6]], expected: [6, 5, 4, 3, 2, 1] },
    { name: "BASIC: merge [1,2,3] and [4,5,6]", input: [[1, 2, 3], [4, 5, 6]], expected: [6, 5, 4, 3, 2, 1] },

    // ================= EDGE CASES =================
    { name: "EDGE: both arrays empty", input: [[], []], expected: [] },
    { name: "EDGE: first array empty", input: [[], [1, 2, 3]], expected: [3, 2, 1] },
    { name: "EDGE: second array empty", input: [[1, 2, 3], []], expected: [3, 2, 1] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: merge duplicate values", input: [[1, 2, 2], [2, 3, 3]], expected: [3, 3, 2, 2, 2, 1] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: merge negative values", input: [[-5, -3, -1], [-4, -2, 0]], expected: [0, -1, -2, -3, -4, -5] },

    // ================= MIXED VALUES =================
    { name: "MIXED: merge positive and negative", input: [[-10, 0, 10], [-5, 5, 15]], expected: [15, 10, 5, 0, -5, -10] },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: merge decimal arrays", input: [[1.1, 2.2], [1.5, 3.3]], expected: [3.3, 2.2, 1.5, 1.1] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: merge large numbers", input: [[1000000, 2000000], [1500000, 3000000]], expected: [3000000, 2000000, 1500000, 1000000] },

    // ================= DIFFERENT LENGTHS =================
    { name: "LENGTH: arrays with different sizes", input: [[1, 3, 5, 7, 9], [2]], expected: [9, 7, 5, 3, 2, 1] },

    // ================= IDENTICAL ARRAYS =================
    { name: "IDENTICAL: merge identical arrays", input: [[1, 2, 3], [1, 2, 3]], expected: [3, 3, 2, 2, 1, 1] }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected
    );
}