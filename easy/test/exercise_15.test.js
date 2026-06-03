const testFunction = require("../src/exercise_15.js");
const runTestcases = require('../../lib/runTestcases.js');

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: 0 → 1", function: testFunction, input: [0], expected: 1 },
    { name: "EDGE: 1 → 1", function: testFunction, input: [1], expected: 1 },

    // ================= BASIC FACTORIAL =================
    { name: "BASIC: 2! → 2", function: testFunction, input: [2], expected: 2 },
    { name: "BASIC: 3! → 6", function: testFunction, input: [3], expected: 6 },
    { name: "BASIC: 4! → 24", function: testFunction, input: [4], expected: 24 },
    { name: "BASIC: 5! → 120", function: testFunction, input: [5], expected: 120 },

    // ================= SMALL RANGE =================
    { name: "RANGE: 6! → 720", function: testFunction, input: [6], expected: 720 },
    { name: "RANGE: 7! → 5040", function: testFunction, input: [7], expected: 5040 },

    // ================= NEGATIVE INPUT =================
    { name: "NEGATIVE: -1 → THROW", function: testFunction, input: [-1], expected: 'Negative number do not have factorial', expectThrow: true },
    { name: "NEGATIVE: -10 → THROW", function: testFunction, input: [-10], expected: 'Negative number do not have factorial', expectThrow: true },

    // ================= LARGE NUMBER =================
    { name: "LARGE: 10! → 3628800", function: testFunction, input: [10], expected: 3628800 },

    // ================= STABILITY =================
    { name: "STABILITY: repeated 5! → 120", function: testFunction, input: [5], expected: 120 },

    // ================= TYPE CHECK ==================
    { name: "INVALID: input must be number", function: testFunction, input: ["1"], expected: 'Input must be a number', expectThrow: true },
    { name: "INVALID: input must be number", function: testFunction, input: [[1]], expected: 'Input must be a number', expectThrow: true },
    { name: "INVALID: input must be number", function: testFunction, input: [{}], expected: 'Input must be a number', expectThrow: true },
    { name: "INVALID: input must be number", function: testFunction, input: [true], expected: 'Input must be a number', expectThrow: true },

];

runTestcases(testCases, __filename);