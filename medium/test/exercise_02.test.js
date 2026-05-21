const testFunction = require("../src/exercise_02.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] + [] → []", input: [[], []], expected: [] },

    // ================= BASIC =================
    { name: "BASIC: [1,2] + [3,4] → [1,2,3,4]", input: [[1, 2], [3, 4]], expected: [1, 2, 3, 4] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [1] + [2] → [1,2]", input: [[1], [2]], expected: [1, 2] },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: [-1,-2] + [-3,-4] → [-1,-2,-3,-4]", input: [[-1, -2], [-3, -4]], expected: [-1, -2, -3, -4] },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-1,0] + [1,-2] → [-1,0,1,-2]", input: [[-1, 0], [1, -2]], expected: [-1, 0, 1, -2] },

    // ================= ZERO =================
    { name: "ZERO: [0,0] + [0,0] → [0,0,0,0]", input: [[0, 0], [0, 0]], expected: [0, 0, 0, 0] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [1,1] + [1,1] → [1,1,1,1]", input: [[1, 1], [1, 1]], expected: [1, 1, 1, 1] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,2000000] + [3000000,4000000]", input: [[1000000, 2000000], [3000000, 4000000]], expected: [1000000, 2000000, 3000000, 4000000] },

    // ================= DECIMAL =================
    { name: "DECIMAL: [1.5,2.5] + [3.5,4.5]", input: [[1.5, 2.5], [3.5, 4.5]], expected: [1.5, 2.5, 3.5, 4.5] },

    // ================= STRESS PATTERN =================
    { name: "STRESS: 5 elements each side", input: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
];

console.log(`\n===== TESTING: ${testFunction.name} ======`);

for (const tc of testCases) {
    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected
    );
}