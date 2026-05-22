const testFunction = require("../src/exercise_09.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: 10 % 3 → 1", input: [10, 3], expected: 1 },
    { name: "BASIC: 20 % 6 → 2", input: [20, 6], expected: 2 },
    { name: "BASIC: 7 % 2 → 1", input: [7, 2], expected: 1 },

    // ================= EXACT DIVISION =================
    { name: "EXACT: 10 % 5 → 0", input: [10, 5], expected: 0 },
    { name: "EXACT: 100 % 10 → 0", input: [100, 10], expected: 0 },

    // ================= DIVIDEND SMALLER =================
    { name: "SMALL: 3 % 10 → 3", input: [3, 10], expected: 3 },
    { name: "SMALL: 1 % 2 → 1", input: [1, 2], expected: 1 },

    // ================= ZERO DIVIDEND =================
    { name: "ZERO: 0 % 5 → 0", input: [0, 5], expected: 0 },

    // ================= NEGATIVE DIVIDEND =================
    { name: "NEGATIVE: -10 % 3 → -1", input: [-10, 3], expected: -1 },
    { name: "NEGATIVE: -7 % 2 → -1", input: [-7, 2], expected: -1 },

    // ================= NEGATIVE DIVISOR =================
    { name: "NEGATIVE DIVISOR: 10 % -3 → 1", input: [10, -3], expected: 1 },
    { name: "NEGATIVE DIVISOR: -10 % -3 → -1", input: [-10, -3], expected: -1 },

    // ================= BOTH NEGATIVE =================
    { name: "BOTH NEGATIVE: -20 % -6 → -2", input: [-20, -6], expected: -2 },

    // ================= EDGE CASE ZERO DIVISOR =================
    { name: "THROW: 10 / 0", input: [10, 0], expected: null, expectThrow: true },
    { name: "THROW: -5 / 0", input: [-5, 0], expected: null, expectThrow: true },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: 1000000 % 7 → 1", input: [1000000, 7], expected: 1 },
    { name: "LARGE NEGATIVE: -1000000 % 7 → -1", input: [-1000000, 7], expected: -1 },

    // ================= DECIMAL DIVIDEND =================
    { name: "DECIMAL: 10.5 / 2.5", input: [10.5, 2.5], expected: 0.5 },

    { name: "DECIMAL: 7.2 / 2", input: [7.2, 2], expected: 1.2 },

    { name: "DECIMAL: 5.5 / 1.2", input: [5.5, 1.2], expected: 0.7 },

    // ================= TYPE CHECK ======================
    { name: "INVALID: input is not number", input: ["2", 3], expected: null, expectThrow: true },
    { name: "INVALID: input is not number", input: [[1, 2], 3], expected: null, expectThrow: true },
    { name: "INVALID: input is not number", input: true, expected: null, expectThrow: true },
    { name: "INVALID: input is not number", input: [{}, 2], expected: null, expectThrow: true }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(tc.name, () => testFunction(...tc.input), tc.expected, {
        expectThrow: tc.expectThrow || false
    });
}