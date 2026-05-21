const testFunction = require("../src/exercise_07.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: [1,2,3,4] → 4", input: [1, 2, 3, 4], expected: 4 },
    { name: "BASIC: [1,3,5] → 9", input: [1, 3, 5], expected: 9 },

    // ================= EMPTY =================
    { name: "EDGE: [] → 0", input: [], expected: 0 },

    // ================= ALL ODD =================
    { name: "ALL ODD: [1,3,5,7] → 16", input: [1, 3, 5, 7], expected: 16 },

    // ================= ALL EVEN =================
    { name: "ALL EVEN: [2,4,6,8] → 0", input: [2, 4, 6, 8], expected: 0 },

    // ================= MIXED =================
    { name: "MIXED: [1,2,3,4,5,6] → 9", input: [1, 2, 3, 4, 5, 6], expected: 9 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-1,-2,-3,-4] → -4", input: [-1, -2, -3, -4], expected: -4 },
    { name: "NEGATIVE MIX: [-1,-3,-5] → -9", input: [-1, -3, -5], expected: -9 },
    { name: "NEGATIVE MIX: [-2,-3,-4,-5] → -8", input: [-2, -3, -4, -5], expected: -8 },

    // ================= ZERO =================
    { name: "ZERO: [0,1,2,3] → 4", input: [0, 1, 2, 3], expected: 4 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [999999,1000000,777777] → 1777776", input: [999999, 1000000, 777777], expected: 1777776 },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [1,1,1,2] → 3", input: [1, 1, 1, 2], expected: 3 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(tc.name, () => testFunction(tc.input), tc.expected);
}