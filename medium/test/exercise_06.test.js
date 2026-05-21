const testFunction = require("../src/exercise_06.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] / [] → []", input: [[], []], expected: [] },

    // ================= BASIC =================
    { name: "BASIC: [10,20,30] / [2,4,5] → [5,5,6]", input: [[10, 20, 30], [2, 4, 5]], expected: [5, 5, 6] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [100] / [10] → [10]", input: [[100], [10]], expected: [10] },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: [-10,-20] / [-2,-4] → [5,5]", input: [[-10, -20], [-2, -4]], expected: [5, 5] },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-10,0,20] / [2,5,-4] → [-5,0,-5]", input: [[-10, 0, 20], [2, 5, -4]], expected: [-5, 0, -5] },

    // ================= ZERO DIVIDEND =================
    { name: "ZERO DIVIDEND: [0,0] / [1,2] → [0,0]", input: [[0, 0], [1, 2]], expected: [0, 0] },

    // ================= DIVISION BY ZERO =================
    { name: "DIV BY ZERO: [10,20,30] / [2,0,5] → [5,null,6]", input: [[10, 20, 30], [2, 0, 5]], expected: [5, null, 6] },

    // ================= ALL DIVISION BY ZERO =================
    { name: "ALL DIV BY ZERO: [1,2,3] / [0,0,0] → [null,null,null]", input: [[1, 2, 3], [0, 0, 0]], expected: [null, null, null] },

    // ================= DECIMAL =================
    { name: "DECIMAL: [5.5,7.5] / [2,2.5] → [2.75,3]", input: [[5.5, 7.5], [2, 2.5]], expected: [2.75, 3] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,2000000] / [1000,2000] → [1000,1000]", input: [[1000000, 2000000], [1000, 2000]], expected: [1000, 1000] },

    // ================= RESULT NEGATIVE =================
    { name: "RESULT NEGATIVE: [10,-20] / [-2,4] → [-5,-5]", input: [[10, -20], [-2, 4]], expected: [-5, -5] },

    // ================= STRESS PATTERN =================
    { name: "STRESS: increasing arrays", input: [[10, 20, 30, 40, 50], [1, 2, 3, 4, 5]], expected: [10, 10, 10, 10, 10] }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected
    );
}