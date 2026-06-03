const testFunction = require("../src/exercise_03.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] + [] → []", function: testFunction, input: [[], []], expected: [] },

    // ================= BASIC =================
    { name: "BASIC: [1,2,3] + [4,5,6] → [5,7,9]", function: testFunction, input: [[1, 2, 3], [4, 5, 6]], expected: [5, 7, 9] },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: [-1,-2,-3] + [-4,-5,-6] → [-5,-7,-9]", function: testFunction, input: [[-1, -2, -3], [-4, -5, -6]], expected: [-5, -7, -9] },

    // ================= MIXED =================
    { name: "MIXED: [-1,0,1] + [1,0,-1] → [0,0,0]", function: testFunction, input: [[-1, 0, 1], [1, 0, -1]], expected: [0, 0, 0] },

    // ================= ZERO =================
    { name: "ZERO: [0,0,0] + [0,0,0] → [0,0,0]", function: testFunction, input: [[0, 0, 0], [0, 0, 0]], expected: [0, 0, 0] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [5] + [10] → [15]", function: testFunction, input: [[5], [10]], expected: [15] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [2,2,2] + [3,3,3] → [5,5,5]", function: testFunction, input: [[2, 2, 2], [3, 3, 3]], expected: [5, 5, 5] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,2000000,3000000] + [1,2,3] → sum", function: testFunction, input: [[1000000, 2000000, 3000000], [1, 2, 3]], expected: [1000001, 2000002, 3000003] },

    // ================= STRESS PATTERN =================
    { name: "STRESS: increasing sequence", function: testFunction, input: [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]], expected: [6, 6, 6, 6, 6] }

];

runTestcases(testCases, __filename);