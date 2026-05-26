const testFunction = require("../src/exercise_12.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] → null", input: [], expected: null },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [5] → 5", input: [5], expected: 5 },
    { name: "SINGLE: [-10] → -10", input: [-10], expected: -10 },
    { name: "SINGLE: [0] → 0", input: [0], expected: 0 },

    // ================= BASIC =================
    { name: "BASIC: [1,2,3,4] → 2.5", input: [1, 2, 3, 4], expected: 2.5 },

    // ================= EVEN DISTRIBUTION =================
    { name: "EVEN: [2,4,6,8] → 5", input: [2, 4, 6, 8], expected: 5 },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: [-1,-2,-3,-4] → -2.5", input: [-1, -2, -3, -4], expected: -2.5 },

    // ================= MIXED SIGN =================
    { name: "MIXED: [-10,0,10] → 0", input: [-10, 0, 10], expected: 0 },

    // ================= ZERO HEAVY =================
    { name: "ZERO MIX: [0,0,0,5] → 1.25", input: [0, 0, 0, 5], expected: 1.25 },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: [1.5,2.5,3.5] → 2.5", input: [1.5, 2.5, 3.5], expected: 2.5 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,2000000,3000000] → 2000000", input: [1000000, 2000000, 3000000], expected: 2000000 },

    // ================= FLOATING POINT CHECK =================
    { name: "FLOAT: [1,2,2] → 1.6666666667", input: [1, 2, 2], expected: 1.6666666666666667 },

    // ================= TYPE CHECK ==================
    { name: "INVALID: input must be array", input: {}, expected: null, expectThrow: true },
    { name: "INVALID: input must be array", input: 'hello', expected: null, expectThrow: true },
    { name: "INVALID: input must be array", input: 1, expected: null, expectThrow: true },
    { name: "INVALID: input must be array", input: true, expected: null, expectThrow: true },

    { name: "INVALID: all element must be number", input: [0, "1.5", 2, 3], expected: null, expectThrow: true },
    { name: "INVALID: all element must be number", input: [0, true, 2, 3], expected: null, expectThrow: true },
    { name: "INVALID: all element must be number", input: [0, null, 2, 3], expected: null, expectThrow: true }

];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(tc.name, () => testFunction(tc.input), tc.expected, {
        expectThrow: tc.expectThrow || false
    });
}