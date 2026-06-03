const testFunction = require("../src/exercise_06.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] / [] → []", function: testFunction, input: [[], []], expected: [] },

    // ================= BASIC =================
    { name: "BASIC: [10,20,30] / [2,4,5] → [5,5,6]", function: testFunction, input: [[10, 20, 30], [2, 4, 5]], expected: [5, 5, 6] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [100] / [10] → [10]", function: testFunction, input: [[100], [10]], expected: [10] },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: [-10,-20] / [-2,-4] → [5,5]", function: testFunction, input: [[-10, -20], [-2, -4]], expected: [5, 5] },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-10,0,20] / [2,5,-4] → [-5,0,-5]", function: testFunction, input: [[-10, 0, 20], [2, 5, -4]], expected: [-5, 0, -5] },

    // ================= ZERO DIVIDEND =================
    { name: "ZERO DIVIDEND: [0,0] / [1,2] → [0,0]", function: testFunction, input: [[0, 0], [1, 2]], expected: [0, 0] },

    // ================= DIVISION BY ZERO =================
    { name: "DIV BY ZERO: [10,20,30] / [2,0,5] → [5,null,6]", function: testFunction, input: [[10, 20, 30], [2, 0, 5]], expected: [5, null, 6] },

    // ================= ALL DIVISION BY ZERO =================
    { name: "ALL DIV BY ZERO: [1,2,3] / [0,0,0] → [null,null,null]", function: testFunction, input: [[1, 2, 3], [0, 0, 0]], expected: [null, null, null] },

    // ================= DECIMAL =================
    { name: "DECIMAL: [5.5,7.5] / [2,2.5] → [2.75,3]", function: testFunction, input: [[5.5, 7.5], [2, 2.5]], expected: [2.75, 3] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,2000000] / [1000,2000] → [1000,1000]", function: testFunction, input: [[1000000, 2000000], [1000, 2000]], expected: [1000, 1000] },

    // ================= RESULT NEGATIVE =================
    { name: "RESULT NEGATIVE: [10,-20] / [-2,4] → [-5,-5]", function: testFunction, input: [[10, -20], [-2, 4]], expected: [-5, -5] },

    // ================= STRESS PATTERN =================
    { name: "STRESS: increasing arrays", function: testFunction, input: [[10, 20, 30, 40, 50], [1, 2, 3, 4, 5]], expected: [10, 10, 10, 10, 10] }

];

runTestcases(testCases, __filename);