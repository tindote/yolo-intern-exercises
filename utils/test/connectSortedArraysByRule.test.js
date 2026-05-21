const testFunction = require("../connectSortedArraysByRule.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC ASCENDING =================
    { name: "BASIC: merge ascending arrays", input: [[1, 3, 5], [2, 4, 6], (a, b) => a - b < 0], expected: [1, 2, 3, 4, 5, 6] },
    { name: "BASIC: small ascending arrays", input: [[1, 2], [3, 4], (a, b) => a - b < 0], expected: [1, 2, 3, 4] },

    // ================= BASIC DESCENDING =================
    { name: "BASIC: merge descending arrays", input: [[6, 4, 2], [5, 3, 1], (a, b) => a - b > 0], expected: [6, 5, 4, 3, 2, 1] },

    // ================= EMPTY ARRAY =================
    { name: "EDGE: arrA empty", input: [[], [1, 2, 3], (a, b) => a - b < 0], expected: [1, 2, 3] },
    { name: "EDGE: arrB empty", input: [[1, 2, 3], [], (a, b) => a - b < 0], expected: [1, 2, 3] },
    { name: "EDGE: both arrays empty", input: [[], [], (a, b) => a - b < 0], expected: [] },

    // ================= DUPLICATE VALUES =================
    { name: "DUPLICATE: duplicate values", input: [[1, 2, 2], [2, 3, 3], (a, b) => a - b < 0], expected: [1, 2, 2, 2, 3, 3] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: negative ascending arrays", input: [[-5, -3, -1], [-4, -2, 0], (a, b) => a - b < 0], expected: [-5, -4, -3, -2, -1, 0] },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: decimal numbers", input: [[1.1, 2.2, 3.3], [1.5, 2.5, 3.5], (a, b) => a - b < 0], expected: [1.1, 1.5, 2.2, 2.5, 3.3, 3.5] },

    // ================= UNEQUAL LENGTH =================
    { name: "LENGTH: different lengths", input: [[1, 3, 5, 7, 9], [2], (a, b) => a - b < 0], expected: [1, 2, 3, 5, 7, 9] },

    // ================= SAME VALUES =================
    { name: "SAME: all elements same", input: [[1, 1, 1], [1, 1], (a, b) => a - b < 0], expected: [1, 1, 1, 1, 1] }

];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected,
        { expectThrow: tc.expectThrow }
    );
}