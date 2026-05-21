const testFunction = require("../src/exercise_12.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: negative number throws error", input: -1, expected: null, expectThrow: true },
    { name: "EDGE: 0! → 0 zeros", input: 0, expected: 0 },
    { name: "EDGE: 1! → 0 zeros", input: 1, expected: 0 },
    { name: "EDGE: 4! → 0 zeros", input: 4, expected: 0 },

    // ================= BASIC CASES =================
    { name: "BASIC: 5! → 1 zero", input: 5, expected: 1 },
    { name: "BASIC: 6! → 1 zero", input: 6, expected: 1 },
    { name: "BASIC: 10! → 2 zeros", input: 10, expected: 2 },

    // ================= MULTIPLE OF 5 =================
    { name: "MULTIPLE: 15! → 3 zeros", input: 15, expected: 3 },
    { name: "MULTIPLE: 20! → 4 zeros", input: 20, expected: 4 },

    // ================= POWER OF 5 =================
    { name: "POWER: 25! → 6 zeros", input: 25, expected: 6 },
    { name: "POWER: 50! → 12 zeros", input: 50, expected: 12 },
    { name: "POWER: 125! → 31 zeros", input: 125, expected: 31 },

    // ================= LARGE VALUES =================
    { name: "LARGE: 100! → 24 zeros", input: 100, expected: 24 },
    { name: "LARGE: 1000! → 249 zeros", input: 1000, expected: 249 },

    // ================= DECIMAL INPUT =================
    { name: "DECIMAL: 5.5 behaves like floor division", input: 5.5, expected: 1 },

    // ================= STRING INPUT =================
    { name: "STRING: '10' → 2 zeros", input: "10", expected: 2 }
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