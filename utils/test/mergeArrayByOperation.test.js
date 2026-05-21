const testFunction = require("../mergeArrayByOperation.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC =================
    {
        name: "BASIC: add two arrays",
        input: [[1, 2, 3], [4, 5, 6], (a, b) => a + b],
        expected: [5, 7, 9]
    },

    {
        name: "BASIC: subtract two arrays",
        input: [[10, 20, 30], [1, 2, 3], (a, b) => a - b],
        expected: [9, 18, 27]
    },

    // ================= MULTIPLY / DIVIDE =================
    {
        name: "MULTIPLY: product arrays",
        input: [[1, 2, 3], [2, 3, 4], (a, b) => a * b],
        expected: [2, 6, 12]
    },

    {
        name: "DIVIDE: divide arrays",
        input: [[10, 20, 30], [2, 4, 5], (a, b) => a / b],
        expected: [5, 5, 6]
    },

    // ================= EDGE CASE =================
    {
        name: "EDGE: empty arrays",
        input: [[], [], (a, b) => a + b],
        expected: []
    },

    // ================= NEGATIVE NUMBERS =================
    {
        name: "NEGATIVE: negative numbers",
        input: [[-1, -2, -3], [1, 2, 3], (a, b) => a + b],
        expected: [0, 0, 0]
    },

    // ================= DECIMAL NUMBERS =================
    {
        name: "DECIMAL: floating numbers",
        input: [[1.5, 2.5], [0.5, 1.5], (a, b) => a + b],
        expected: [2, 4]
    },

    // ================= SAME VALUES =================
    {
        name: "SAME: identical arrays",
        input: [[5, 5, 5], [5, 5, 5], (a, b) => a - b],
        expected: [0, 0, 0]
    },

    // ================= CUSTOM FUNCTION =================
    {
        name: "CUSTOM: max function",
        input: [[1, 10, 3], [5, 2, 8], (a, b) => Math.max(a, b)],
        expected: [5, 10, 8]
    },

    // ================= ZERO CASE =================
    {
        name: "ZERO: zeros in arrays",
        input: [[0, 0, 0], [0, 0, 0], (a, b) => a + b],
        expected: [0, 0, 0]
    }

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