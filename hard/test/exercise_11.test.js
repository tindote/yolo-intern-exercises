const testFunction = require("../src/exercise_11.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: negative number throws error", function: testFunction, input: [-1], expected: 'Cannot factorial negative number', expectThrow: true },
    { name: "EDGE: 0! → 1", function: testFunction, input: [0], expected: 1 },
    { name: "EDGE: 1! → 1", function: testFunction, input: [1], expected: 1 },

    // ================= BASIC CASES =================
    { name: "BASIC: 2! → 2", function: testFunction, input: [2], expected: 2 },
    { name: "BASIC: 3! → 6", function: testFunction, input: [3], expected: 6 },
    { name: "BASIC: 4! → 4", function: testFunction, input: [4], expected: 4 },
    { name: "BASIC: 5! → 2", function: testFunction, input: [5], expected: 2 },

    // ================= SMALL FACTORIALS =================
    { name: "SMALL: 6! → 2", function: testFunction, input: [6], expected: 2 },
    { name: "SMALL: 7! → 4", function: testFunction, input: [7], expected: 4 },
    { name: "SMALL: 8! → 2", function: testFunction, input: [8], expected: 2 },
    { name: "SMALL: 9! → 8", function: testFunction, input: [9], expected: 8 },
    { name: "SMALL: 10! → 8", function: testFunction, input: [10], expected: 8 },

    // ================= MEDIUM VALUES =================
    { name: "MEDIUM: 12! → 6", function: testFunction, input: [12], expected: 6 },
    { name: "MEDIUM: 15! → 8", function: testFunction, input: [15], expected: 8 },
    { name: "MEDIUM: 20! → 4", function: testFunction, input: [20], expected: 4 },

    // ================= LARGE VALUES =================
    { name: "LARGE: 25! → 4", function: testFunction, input: [25], expected: 4 },
    { name: "LARGE: 30! → 8", function: testFunction, input: [30], expected: 8 },
    { name: "LARGE: 50! → 2", function: testFunction, input: [50], expected: 2 },

    // ================= TYPE / SPECIAL CASES =================
    { name: "SPECIAL: string number '5'", function: testFunction, input: ["5"], expected: 2 }

];

runTestcases(testCases, __filename);