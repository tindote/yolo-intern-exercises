const testFunction = require("../src/exercise_15.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: 0 → 1", input: 0, expected: 1 },
    { name: "EDGE: 1 → 1", input: 1, expected: 1 },

    // ================= BASIC FACTORIAL =================
    { name: "BASIC: 2! → 2", input: 2, expected: 2 },
    { name: "BASIC: 3! → 6", input: 3, expected: 6 },
    { name: "BASIC: 4! → 24", input: 4, expected: 24 },
    { name: "BASIC: 5! → 120", input: 5, expected: 120 },

    // ================= SMALL RANGE =================
    { name: "RANGE: 6! → 720", input: 6, expected: 720 },
    { name: "RANGE: 7! → 5040", input: 7, expected: 5040 },

    // ================= NEGATIVE INPUT =================
    {
        name: "NEGATIVE: -1 → THROW",
        input: -1,
        expected: null,
        expectThrow: true 
    },
    {
        name: "NEGATIVE: -10 → THROW",
        input: -10,
        expected: null,
        expectThrow: true 
    },

    // ================= LARGE NUMBER =================
    { name: "LARGE: 10! → 3628800", input: 10, expected: 3628800 },

    // ================= STABILITY =================
    { name: "STABILITY: repeated 5! → 120", input: 5, expected: 120 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(tc.name, () => testFunction(tc.input), tc.expected, {
        expectThrow: tc.expectThrow || false
    });
}