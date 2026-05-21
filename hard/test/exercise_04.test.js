const testFunction = require("../src/exercise_04.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC CASES =================
    { name: "BASIC: merge [9,7,5] and [8,6,4]", input: [[9, 7, 5], [8, 6, 4]], expected: [9, 8, 7, 6, 5, 4] },
    { name: "BASIC: merge [6,5,4] and [3,2,1]", input: [[6, 5, 4], [3, 2, 1]], expected: [6, 5, 4, 3, 2, 1] },

    // ================= EDGE CASES =================
    { name: "EDGE: both arrays empty", input: [[], []], expected: [] },
    { name: "EDGE: first array empty", input: [[], [3, 2, 1]], expected: [3, 2, 1] },
    { name: "EDGE: second array empty", input: [[3, 2, 1], []], expected: [3, 2, 1] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: merge duplicate values", input: [[5, 4, 4], [4, 3, 3]], expected: [5, 4, 4, 4, 3, 3] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: merge negative values", input: [[-1, -3, -5], [0, -2, -4]], expected: [0, -1, -2, -3, -4, -5] },

    // ================= MIXED VALUES =================
    { name: "MIXED: merge positive and negative", input: [[10, 0, -10], [5, -5, -15]], expected: [10, 5, 0, -5, -10, -15] },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: merge decimal arrays", input: [[3.3, 2.2], [2.5, 1.1]], expected: [3.3, 2.5, 2.2, 1.1] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: merge large numbers", input: [[3000000, 2000000], [2500000, 1000000]], expected: [3000000, 2500000, 2000000, 1000000] },

    // ================= DIFFERENT LENGTHS =================
    { name: "LENGTH: arrays with different sizes", input: [[9, 7, 5, 3], [8]], expected: [9, 8, 7, 5, 3] },

    // ================= IDENTICAL ARRAYS =================
    { name: "IDENTICAL: merge identical arrays", input: [[3, 2, 1], [3, 2, 1]], expected: [3, 3, 2, 2, 1, 1] }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected
    );
}