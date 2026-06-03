const testFunction = require("../src/exercise_16.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: 0 → '0'", function: testFunction, input: [0], expected: "0" },

    // ================= BASIC =================
    { name: "BASIC: 1 → '0 1 1'", function: testFunction, input: [1], expected: "0 1 1" },
    { name: "BASIC: 5 → '0 1 1 2 3 5'", function: testFunction, input: [5], expected: "0 1 1 2 3 5" },
    { name: "BASIC: 10 → '0 1 1 2 3 5 8'", function: testFunction, input: [10], expected: "0 1 1 2 3 5 8" },

    // ================= SMALL VALUES =================
    { name: "SMALL: 2 → '0 1 1 2'", function: testFunction, input: [2], expected: "0 1 1 2" },
    { name: "SMALL: 3 → '0 1 1 2 3'", function: testFunction, input: [3], expected: "0 1 1 2 3" },

    // ================= MEDIUM VALUES =================
    { name: "MEDIUM: 20 → '0 1 1 2 3 5 8 13'", function: testFunction, input: [20], expected: "0 1 1 2 3 5 8 13" },

    // ================= LARGE VALUES =================
    { name: "LARGE: 50 → '0 1 1 2 3 5 8 13 21 34'", function: testFunction, input: [50], expected: "0 1 1 2 3 5 8 13 21 34" },
    { name: "VERY LARGE: 100 → fibonacci up to 100", function: testFunction, input: [100], expected: "0 1 1 2 3 5 8 13 21 34 55 89" },

    // ================= DECIMAL =================
    { name: "DECIMAL: 7.5 → '0 1 1 2 3 5'", function: testFunction, input: [7.5], expected: "0 1 1 2 3 5" },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: -1 → THROW", function: testFunction, input: [-1], expected:'Input must be a positive integer', expectThrow: true }

];

runTestcases(testCases, __filename);