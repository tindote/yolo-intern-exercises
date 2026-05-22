const testFunction = require("../src/exercise_05.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: [1,2,3,4] → 2 odds", input: [1, 2, 3, 4], expected: 2 },
    { name: "BASIC: [1,3,5] → 3 odds", input: [1, 3, 5], expected: 3 },

    // ================= EMPTY =================
    { name: "EDGE: [] → 0 odds", input: [], expected: 0 },

    // ================= ALL ODD =================
    { name: "ALL ODD: [1,3,5,7] → 4 odds", input: [1, 3, 5, 7], expected: 4 },

    // ================= ALL EVEN =================
    { name: "ALL EVEN: [2,4,6,8] → 0 odds", input: [2, 4, 6, 8], expected: 0 },

    // ================= MIXED =================
    { name: "MIXED: [1,2,3,4,5,6] → 3 odds", input: [1, 2, 3, 4, 5, 6], expected: 3 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-1,-2,-3,-4] → 2 odds", input: [-1, -2, -3, -4], expected: 2 },
    { name: "NEGATIVE: [-1,-3,-5] → 3 odds", input: [-1, -3, -5], expected: 3 },
    { name: "NEGATIVE MIX: [-2,-3,-4,-5] → 2 odds", input: [-2, -3, -4, -5], expected: 2 },

    // ================= ZERO =================
    { name: "ZERO: [0,1,2] → 1 odd", input: [0, 1, 2], expected: 1 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [999999,1000000,777777] → 2 odds", input: [999999, 1000000, 777777], expected: 2 },
    
    
    // ================= TYPE CHECK ==================
    { name: "INVALID: input must be array", input: {}, expected: null, expectThrow: true },
    { name: "INVALID: input must be array", input: 'hello', expected: null, expectThrow: true },
    { name: "INVALID: input must be array", input: 1, expected: null, expectThrow: true },
    { name: "INVALID: input must be array", input: true, expected: null, expectThrow: true },

    { name: "INVALID: all element must be integer", input: [0, 1.5, 2, 3], expected: null, expectThrow: true },
    { name: "INVALID: all element must be integer", input: [0, "1.5", 2, 3], expected: null, expectThrow: true },
    { name: "INVALID: all element must be integer", input: [0, true, 2, 3], expected: null, expectThrow: true },
    { name: "INVALID: all element must be integer", input: [0, null, 2, 3], expected: null, expectThrow: true }

];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(tc.name, () => testFunction(tc.input), tc.expected, {
        expectThrow: tc.expectThrow || false
    });
}