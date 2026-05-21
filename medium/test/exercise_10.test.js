const testFunction = require("../src/exercise_10.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: [] & [] → 0", input: [[], []], expected: 0 },
    { name: "EDGE: [1,2,3] & [] → 3", input: [[1, 2, 3], []], expected: 3 },
    { name: "EDGE: [] & [1,2,3] → 0", input: [[], [1, 2, 3]], expected: 0 },

    // ================= BASIC =================
    { name: "BASIC: [1,2,3] & [2,3,4] → 1", input: [[1, 2, 3], [2, 3, 4]], expected: 1 },

    // ================= ALL SAME =================
    { name: "ALL SAME: [1,2,3] & [1,2,3] → 0", input: [[1, 2, 3], [1, 2, 3]], expected: 0 },

    // ================= NO MATCH =================
    { name: "NO MATCH: [1,2,3] & [4,5,6] → 3", input: [[1, 2, 3], [4, 5, 6]], expected: 3 },

    // ================= DUPLICATE IN arrA =================
    { name: "DUP arrA: [1,1,1] & [1] → 0", input: [[1, 1, 1], [1]], expected: 0 },

    // ================= DUPLICATE BOTH =================
    { name: "DUP BOTH: [1,1,2,2] & [1,2] → 0", input: [[1, 1, 2, 2], [1, 2]], expected: 0 },

    // ================= PARTIAL DUPLICATE =================
    { name: "PARTIAL DUP: [1,1,2,3] & [1,2] → 1", input: [[1, 1, 2, 3], [1, 2]], expected: 1 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-1,-2,-3] & [-2,-3,-4] → 1", input: [[-1, -2, -3], [-2, -3, -4]], expected: 1 },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-1,0,1] & [0,2,-1] → 1", input: [[-1, 0, 1], [0, 2, -1]], expected: 1 },

    // ================= ZERO =================
    { name: "ZERO: [0,0,1] & [0,2] → 1", input: [[0, 0, 1], [0, 2]], expected: 1 },

    // ================= STRING VALUES =================
    { name: "STRING: ['a','b'] & ['b','c'] → 1", input: [["a", "b"], ["b", "c"]], expected: 1 },

    // ================= BOOLEAN VALUES =================
    { name: "BOOLEAN: [true,false] & [false] → 1", input: [[true, false], [false]], expected: 1 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000,2000,3000] & [3000,4000] → 2", input: [[1000, 2000, 3000], [3000, 4000]], expected: 2 },

    // ================= STRESS PATTERN =================
    { name: "STRESS: repeated mixed elements", input: [[1, 2, 3, 1, 2, 3, 4, 5], [2, 3, 5]], expected: 3 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected
    );
}