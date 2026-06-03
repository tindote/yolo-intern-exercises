const testFunction = require("../src/exercise_07.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: [1,2,3,4,5] from 1 to 3 → [2,3,4]", function: testFunction, input: [[1, 2, 3, 4, 5], 1, 3], expected: [2, 3, 4] },

    // ================= FULL ARRAY =================
    { name: "FULL ARRAY: [1,2,3] from 0 to 2 → [1,2,3]", function: testFunction, input: [[1, 2, 3], 0, 2], expected: [1, 2, 3] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [5,6,7] from 1 to 1 → [6]", function: testFunction, input: [[5, 6, 7], 1, 1], expected: [6] },

    // ================= EDGE: EMPTY ARRAY =================
    { name: "EDGE: [] from 0 to 0 → THROW", function: testFunction, input: [[], 0, 0], expected: 'Invalid start or end index', expectThrow: true },

    // ================= START AT ZERO =================
    { name: "START ZERO: [10,20,30] from 0 to 1 → [10,20]", function: testFunction, input: [[10, 20, 30], 0, 1], expected: [10, 20] },

    // ================= END AT LAST INDEX =================
    { name: "END LAST: [10,20,30] from 1 to 2 → [20,30]", function: testFunction, input: [[10, 20, 30], 1, 2], expected: [20, 30] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-1,-2,-3,-4] from 1 to 2 → [-2,-3]", function: testFunction, input: [[-1, -2, -3, -4], 1, 2], expected: [-2, -3] },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-1,0,1,2] from 0 to 2 → [-1,0,1]", function: testFunction, input: [[-1, 0, 1, 2], 0, 2], expected: [-1, 0, 1] },

    // ================= DECIMAL =================
    { name: "DECIMAL: [1.5,2.5,3.5] from 1 to 2 → [2.5,3.5]", function: testFunction, input: [[1.5, 2.5, 3.5], 1, 2], expected: [2.5, 3.5] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [1,1,1,1] from 1 to 3 → [1,1,1]", function: testFunction, input: [[1, 1, 1, 1], 1, 3], expected: [1, 1, 1] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000,2000,3000,4000] from 1 to 2 → [2000,3000]", function: testFunction, input: [[1000, 2000, 3000, 4000], 1, 2], expected: [2000, 3000] },

    // ================= INVALID: NEGATIVE START =================
    { name: "INVALID: negative start index → THROW", function: testFunction, input: [[1, 2, 3], -1, 2], expected: 'Invalid start or end index', expectThrow: true },

    // ================= INVALID: END OUT OF RANGE =================
    { name: "INVALID: end index out of range → THROW", function: testFunction, input: [[1, 2, 3], 0, 5], expected: 'Invalid start or end index', expectThrow: true },

    // ================= INVALID: START > END =================
    { name: "INVALID: start > end → THROW", function: testFunction, input: [[1, 2, 3], 2, 1], expected: 'Invalid start or end index', expectThrow: true },

    // ================= STRESS PATTERN =================
    { name: "STRESS: long array middle slice", function: testFunction, input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7], expected: [4, 5, 6, 7, 8] }

];

runTestcases(testCases, __filename);