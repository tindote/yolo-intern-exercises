const testFunction = require("../src/exercise_01.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC CASES =================
    { name: "BASIC: 1 2 3 → 2 3 1", input: [1, 2, 3], expected: [2, 3, 1] },
    { name: "BASIC: 10 20 30 → 20 30 10", input: [10, 20, 30], expected: [20, 30, 10] },

    // ================= EDGE CASES =================
    { name: "EDGE: all same values (5 5 5)", input: [5, 5, 5], expected: [5, 5, 5] },
    { name: "EDGE: all zeros (0 0 0)", input: [0, 0, 0], expected: [0, 0, 0] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: -1 -2 -3 → -2 -3 -1", input: [-1, -2, -3], expected: [-2, -3, -1] },

    // ================= MIXED VALUES =================
    { name: "MIXED: -10 0 10 → 0 10 -10", input: [-10, 0, 10], expected: [0, 10, -10] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: 1e6 999999 123456 → rotated", input: [1000000, 999999, 123456], expected: [999999, 123456, 1000000] },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: 1.5 2.5 3.5 → 2.5 3.5 1.5", input: [1.5, 2.5, 3.5], expected: [2.5, 3.5, 1.5] },

    // ================= TYPE CHECK ======================
    { name: "INVALID: input is not number", input: ["2", 3, 4], expected: null, expectThrow: true },
    { name: "INVALID: input is not number", input: [[1, 2], 3, 4], expected: null, expectThrow: true },
    { name: "INVALID: input is not number", input: true, expected: null, expectThrow: true }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(tc.name, () => testFunction(...tc.input), tc.expected, {
        expectThrow: tc.expectThrow || false
    });
}