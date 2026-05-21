const testFunction = require("../sortArrayByRule.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC ASCENDING =================
    {
        name: "ASC: basic ascending sort",
        input: [[3, 1, 4, 2, 5], (a, b) => a - b],
        expected: [1, 2, 3, 4, 5]
    },

    {
        name: "ASC: already sorted",
        input: [[1, 2, 3, 4, 5], (a, b) => a - b],
        expected: [1, 2, 3, 4, 5]
    },

    {
        name: "ASC: reverse sorted",
        input: [[5, 4, 3, 2, 1], (a, b) => a - b],
        expected: [1, 2, 3, 4, 5]
    },

    // ================= BASIC DESCENDING =================
    {
        name: "DESC: basic descending sort",
        input: [[1, 2, 3, 4, 5], (a, b) => b - a],
        expected: [5, 4, 3, 2, 1]
    },

    // ================= EDGE CASE =================
    {
        name: "EDGE: empty array",
        input: [[], (a, b) => a - b],
        expected: []
    },

    {
        name: "EDGE: single element",
        input: [[42], (a, b) => a - b],
        expected: [42]
    },

    // ================= DUPLICATES =================
    {
        name: "DUPLICATE: repeated values",
        input: [[3, 1, 2, 3, 1], (a, b) => a - b],
        expected: [1, 1, 2, 3, 3]
    },

    // ================= NEGATIVE NUMBERS =================
    {
        name: "NEGATIVE: mixed negative numbers",
        input: [[-3, -1, -5, -2], (a, b) => a - b],
        expected: [-5, -3, -2, -1]
    },

    // ================= DECIMAL NUMBERS =================
    {
        name: "DECIMAL: floating numbers",
        input: [[1.5, 0.5, 2.5, 1.0], (a, b) => a - b],
        expected: [0.5, 1, 1.5, 2.5]
    },

    // ================= CUSTOM RULE =================
    {
        name: "CUSTOM: sort by absolute value",
        input: [[-10, 5, -2, 3, -1], (a, b) => Math.abs(a) - Math.abs(b)],
        expected: [-1, -2, 3, 5, -10]
    },

    // ================= SAME VALUES =================
    {
        name: "SAME: all equal values",
        input: [[2, 2, 2, 2], (a, b) => a - b],
        expected: [2, 2, 2, 2]
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