const testFunction = require("../src/exercise_05.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] * [] → []", input: [[], []], expected: [] },

    // ================= BASIC =================
    { name: "BASIC: [1,2,3] * [4,5,6] → [4,10,18]", input: [[1, 2, 3], [4, 5, 6]], expected: [4, 10, 18] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [5] * [10] → [50]", input: [[5], [10]], expected: [50] },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: [-1,-2] * [-3,-4] → [3,8]", input: [[-1, -2], [-3, -4]], expected: [3, 8] },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-1,0,2] * [3,5,-4] → [-3,0,-8]", input: [[-1, 0, 2], [3, 5, -4]], expected: [-3, 0, -8] },

    // ================= ZERO =================
    { name: "ZERO: [0,0,0] * [1,2,3] → [0,0,0]", input: [[0, 0, 0], [1, 2, 3]], expected: [0, 0, 0] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [2,2,2] * [3,3,3] → [6,6,6]", input: [[2, 2, 2], [3, 3, 3]], expected: [6, 6, 6] },

    // ================= DECIMAL =================
    { name: "DECIMAL: [1.5,2.5] * [2,4] → [3,10]", input: [[1.5, 2.5], [2, 4]], expected: [3, 10] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000,2000] * [3000,4000] → [3000000,8000000]", input: [[1000, 2000], [3000, 4000]], expected: [3000000, 8000000] },

    // ================= RESULT NEGATIVE =================
    { name: "RESULT NEGATIVE: [1,-2,3] * [-1,2,-3] → [-1,-4,-9]", input: [[1, -2, 3], [-1, 2, -3]], expected: [-1, -4, -9] },

    // ================= STRESS PATTERN =================
    { name: "STRESS: increasing arrays", input: [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]], expected: [5, 8, 9, 8, 5] }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected
    );
}