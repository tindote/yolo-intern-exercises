const testFunction = require("../src/exercise_06.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: [1,2,3,4] → 6", input: [1, 2, 3, 4], expected: 6 },
    { name: "BASIC: [2,4,6] → 12", input: [2, 4, 6], expected: 12 },

    // ================= EMPTY =================
    { name: "EDGE: [] → 0", input: [], expected: 0 },

    // ================= ALL EVEN =================
    { name: "ALL EVEN: [2,4,6,8] → 20", input: [2, 4, 6, 8], expected: 20 },

    // ================= ALL ODD =================
    { name: "ALL ODD: [1,3,5,7] → 0", input: [1, 3, 5, 7], expected: 0 },

    // ================= MIXED =================
    { name: "MIXED: [1,2,3,4,5,6] → 12", input: [1, 2, 3, 4, 5, 6], expected: 12 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-2,-3,-4,-5] → -6", input: [-2, -3, -4, -5], expected: -6 },
    { name: "NEGATIVE MIX: [-1,-2,3,4] → 2", input: [-1, -2, 3, 4], expected: 2 },

    // ================= ZERO =================
    { name: "ZERO: [0,1,2,3] → 2", input: [0, 1, 2, 3], expected: 2 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,999999,888888] → 1888888", input: [1000000, 999999, 888888], expected: 1888888 },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [2,2,2,3] → 6", input: [2, 2, 2, 3], expected: 6 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(tc.name, () => testFunction(tc.input), tc.expected);
}