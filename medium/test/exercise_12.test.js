const testFunction = require("../src/exercise_12.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: random between -10 and 10", input: 10 },
    { name: "BASIC: random between -100 and 100", input: 100 },

    // ================= EDGE CASES =================
    { name: "EDGE: value = 0 → always 0", input: 0 },
    { name: "EDGE: value = 1", input: 1 },

    // ================= DECIMAL =================
    { name: "DECIMAL: value = 5.5", input: 5.5 },

    // ================= LARGE NUMBER =================
    { name: "LARGE: value = 1000000", input: 1000000 },

    // ================= SMALL DECIMAL =================
    { name: "SMALL DECIMAL: value = 0.0001", input: 0.0001 },

    // ================= INVALID INPUT =================
    { name: "INVALID: negative value → THROW", input: -10, expectThrow: true },

    // ================= INVALID DECIMAL NEGATIVE =================
    { name: "INVALID: negative decimal → THROW", input: -5.5, expectThrow: true }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => {
            const result = testFunction(tc.input);

            // validate random range
            return result >= -tc.input && result <= tc.input;
        },
        true,
        { expectThrow: tc.expectThrow }
    );
}