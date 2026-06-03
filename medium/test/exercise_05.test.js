const testFunction = require("../src/exercise_05.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] * [] → []", function: testFunction, input: [[], []], expected: [] },

    // ================= BASIC =================
    { name: "BASIC: [1,2,3] * [4,5,6] → [4,10,18]", function: testFunction, input: [[1, 2, 3], [4, 5, 6]], expected: [4, 10, 18] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [5] * [10] → [50]", function: testFunction, input: [[5], [10]], expected: [50] },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: [-1,-2] * [-3,-4] → [3,8]", function: testFunction, input: [[-1, -2], [-3, -4]], expected: [3, 8] },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-1,0,2] * [3,5,-4] → [-3,0,-8]", function: testFunction, input: [[-1, 0, 2], [3, 5, -4]], expected: [-3, 0, -8] },

    // ================= ZERO =================
    { name: "ZERO: [0,0,0] * [1,2,3] → [0,0,0]", function: testFunction, input: [[0, 0, 0], [1, 2, 3]], expected: [0, 0, 0] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [2,2,2] * [3,3,3] → [6,6,6]", function: testFunction, input: [[2, 2, 2], [3, 3, 3]], expected: [6, 6, 6] },

    // ================= DECIMAL =================
    { name: "DECIMAL: [1.5,2.5] * [2,4] → [3,10]", function: testFunction, input: [[1.5, 2.5], [2, 4]], expected: [3, 10] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000,2000] * [3000,4000] → [3000000,8000000]", function: testFunction, input: [[1000, 2000], [3000, 4000]], expected: [3000000, 8000000] },

    // ================= RESULT NEGATIVE =================
    { name: "RESULT NEGATIVE: [1,-2,3] * [-1,2,-3] → [-1,-4,-9]", function: testFunction, input: [[1, -2, 3], [-1, 2, -3]], expected: [-1, -4, -9] },

    // ================= STRESS PATTERN =================
    { name: "STRESS: increasing arrays", function: testFunction, input: [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]], expected: [5, 8, 9, 8, 5] }

];

runTestcases(testCases, __filename);