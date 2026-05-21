const testFunction = require("../src/exercise_11.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: negative number throws error", input: -1, expected: null, expectThrow: true },
    { name: "EDGE: 0! → 1", input: 0, expected: 1 },
    { name: "EDGE: 1! → 1", input: 1, expected: 1 },

    // ================= BASIC CASES =================
    { name: "BASIC: 2! → 2", input: 2, expected: 2 },
    { name: "BASIC: 3! → 6", input: 3, expected: 6 },
    { name: "BASIC: 4! → 4", input: 4, expected: 4 },
    { name: "BASIC: 5! → 2", input: 5, expected: 2 },

    // ================= SMALL FACTORIALS =================
    { name: "SMALL: 6! → 2", input: 6, expected: 2 },
    { name: "SMALL: 7! → 4", input: 7, expected: 4 },
    { name: "SMALL: 8! → 2", input: 8, expected: 2 },
    { name: "SMALL: 9! → 8", input: 9, expected: 8 },
    { name: "SMALL: 10! → 8", input: 10, expected: 8 },

    // ================= MEDIUM VALUES =================
    { name: "MEDIUM: 12! → 6", input: 12, expected: 6 },
    { name: "MEDIUM: 15! → 8", input: 15, expected: 8 },
    { name: "MEDIUM: 20! → 4", input: 20, expected: 4 },

    // ================= LARGE VALUES =================
    { name: "LARGE: 25! → 4", input: 25, expected: 4 },
    { name: "LARGE: 30! → 8", input: 30, expected: 8 },
    { name: "LARGE: 50! → 2", input: 50, expected: 2 },

    // ================= TYPE / SPECIAL CASES =================
    { name: "SPECIAL: string number '5'", input: "5", expected: 2 }
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