const testFunction = require("../src/exercise_16.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: 0 → '0'", input: 0, expected: "0" },

    // ================= BASIC =================
    { name: "BASIC: 1 → '0 1 1'", input: 1, expected: "0 1 1" },
    { name: "BASIC: 5 → '0 1 1 2 3 5'", input: 5, expected: "0 1 1 2 3 5" },
    { name: "BASIC: 10 → '0 1 1 2 3 5 8'", input: 10, expected: "0 1 1 2 3 5 8" },

    // ================= SMALL VALUES =================
    { name: "SMALL: 2 → '0 1 1 2'", input: 2, expected: "0 1 1 2" },
    { name: "SMALL: 3 → '0 1 1 2 3'", input: 3, expected: "0 1 1 2 3" },

    // ================= MEDIUM VALUES =================
    { name: "MEDIUM: 20 → '0 1 1 2 3 5 8 13'", input: 20, expected: "0 1 1 2 3 5 8 13" },

    // ================= LARGE VALUES =================
    { name: "LARGE: 50 → '0 1 1 2 3 5 8 13 21 34'", input: 50, expected: "0 1 1 2 3 5 8 13 21 34" },
    { name: "VERY LARGE: 100 → fibonacci up to 100", input: 100, expected: "0 1 1 2 3 5 8 13 21 34 55 89" },

    // ================= DECIMAL =================
    { name: "DECIMAL: 7.5 → '0 1 1 2 3 5'", input: 7.5, expected: "0 1 1 2 3 5" },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: -1 → THROW", input: -1, expected: null, expectThrow: true }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => testFunction(tc.input),
        tc.expected,
        { expectThrow: tc.expectThrow }
    );
}