const testFunction = require("../src/exercise_07.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: [1,2,3,4,5] from 1 to 3 → [2,3,4]", input: [[1, 2, 3, 4, 5], 1, 3], expected: [2, 3, 4] },

    // ================= FULL ARRAY =================
    { name: "FULL ARRAY: [1,2,3] from 0 to 2 → [1,2,3]", input: [[1, 2, 3], 0, 2], expected: [1, 2, 3] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [5,6,7] from 1 to 1 → [6]", input: [[5, 6, 7], 1, 1], expected: [6] },

    // ================= EDGE: EMPTY ARRAY =================
    { name: "EDGE: [] from 0 to 0 → THROW", input: [[], 0, 0], expected: null, expectThrow: true },

    // ================= START AT ZERO =================
    { name: "START ZERO: [10,20,30] from 0 to 1 → [10,20]", input: [[10, 20, 30], 0, 1], expected: [10, 20] },

    // ================= END AT LAST INDEX =================
    { name: "END LAST: [10,20,30] from 1 to 2 → [20,30]", input: [[10, 20, 30], 1, 2], expected: [20, 30] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-1,-2,-3,-4] from 1 to 2 → [-2,-3]", input: [[-1, -2, -3, -4], 1, 2], expected: [-2, -3] },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-1,0,1,2] from 0 to 2 → [-1,0,1]", input: [[-1, 0, 1, 2], 0, 2], expected: [-1, 0, 1] },

    // ================= DECIMAL =================
    { name: "DECIMAL: [1.5,2.5,3.5] from 1 to 2 → [2.5,3.5]", input: [[1.5, 2.5, 3.5], 1, 2], expected: [2.5, 3.5] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [1,1,1,1] from 1 to 3 → [1,1,1]", input: [[1, 1, 1, 1], 1, 3], expected: [1, 1, 1] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000,2000,3000,4000] from 1 to 2 → [2000,3000]", input: [[1000, 2000, 3000, 4000], 1, 2], expected: [2000, 3000] },

    // ================= INVALID: NEGATIVE START =================
    { name: "INVALID: negative start index → THROW", input: [[1, 2, 3], -1, 2], expected: null, expectThrow: true },

    // ================= INVALID: END OUT OF RANGE =================
    { name: "INVALID: end index out of range → THROW", input: [[1, 2, 3], 0, 5], expected: null, expectThrow: true },

    // ================= INVALID: START > END =================
    { name: "INVALID: start > end → THROW", input: [[1, 2, 3], 2, 1], expected: null, expectThrow: true },

    // ================= STRESS PATTERN =================
    { name: "STRESS: long array middle slice", input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7], expected: [4, 5, 6, 7, 8] }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected,
        { expectThrow: tc.expectThrow }
    );
}