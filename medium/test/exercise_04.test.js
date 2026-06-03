const testFunction = require("../src/exercise_04.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] - [] → []", function: testFunction, input: [[], []], expected: [] },

    // ================= BASIC =================
    { name: "BASIC: [5,7,9] - [1,2,3] → [4,5,6]", function: testFunction, input: [[5, 7, 9], [1, 2, 3]], expected: [4, 5, 6] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [10] - [3] → [7]", function: testFunction, input: [[10], [3]], expected: [7] },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: [-5,-7] - [-1,-2] → [-4,-5]", function: testFunction, input: [[-5, -7], [-1, -2]], expected: [-4, -5] },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-1,0,5] - [1,-2,3] → [-2,2,2]", function: testFunction, input: [[-1, 0, 5], [1, -2, 3]], expected: [-2, 2, 2] },

    // ================= ZERO =================
    { name: "ZERO: [0,0,0] - [0,0,0] → [0,0,0]", function: testFunction, input: [[0, 0, 0], [0, 0, 0]], expected: [0, 0, 0] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [5,5,5] - [2,2,2] → [3,3,3]", function: testFunction, input: [[5, 5, 5], [2, 2, 2]], expected: [3, 3, 3] },

    // ================= DECIMAL =================
    { name: "DECIMAL: [5.5,7.5] - [1.5,2.5] → [4,5]", function: testFunction, input: [[5.5, 7.5], [1.5, 2.5]], expected: [4, 5] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,2000000] - [1,2] → [999999,1999998]", function: testFunction, input: [[1000000, 2000000], [1, 2]], expected: [999999, 1999998] },

    // ================= RESULT NEGATIVE =================
    { name: "RESULT NEGATIVE: [1,2,3] - [5,5,5] → [-4,-3,-2]", function: testFunction, input: [[1, 2, 3], [5, 5, 5]], expected: [-4, -3, -2] },

    // ================= STRESS PATTERN =================
    { name: "STRESS: increasing arrays", function: testFunction, input: [[10, 20, 30, 40, 50], [1, 2, 3, 4, 5]], expected: [9, 18, 27, 36, 45] }

];

runTestcases(testCases, __filename);