const testFunction = require("../src/exercise_15.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: 0 → 0", input: 0, expected: 0 },

    // ================= BASIC =================
    { name: "BASIC: 123 → 6", input: 123, expected: 6 },
    { name: "BASIC: 4567 → 22", input: 4567, expected: 22 },

    // ================= SINGLE DIGIT =================
    { name: "SINGLE: 7 → 7", input: 7, expected: 7 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: -123 → 6", input: -123, expected: 6 },
    { name: "NEGATIVE: -999 → 27", input: -999, expected: 27 },

    // ================= NUMBER WITH ZERO =================
    { name: "ZERO DIGITS: 1005 → 6", input: 1005, expected: 6 },
    { name: "ZERO DIGITS: 9090 → 18", input: 9090, expected: 18 },

    // ================= ALL ZEROS EXCEPT ONE =================
    { name: "SPARSE: 1000000 → 1", input: 1000000, expected: 1 },

    // ================= LARGE NUMBER =================
    { name: "LARGE: 123456789 → 45", input: 123456789, expected: 45 },

    // ================= REPEATED DIGITS =================
    { name: "REPEATED: 111111 → 6", input: 111111, expected: 6 },

    // ================= PALINDROME =================
    { name: "PALINDROME: 12321 → 9", input: 12321, expected: 9 },

    // ================= VERY LARGE NUMBER =================
    { name: "VERY LARGE: 999999999 → 81", input: 999999999, expected: 81 },

    // ================= STRESS PATTERN =================
    { name: "STRESS: 987654321 → 45", input: 987654321, expected: 45 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(
        tc.name,
        () => testFunction(tc.input),
        tc.expected
    );
}