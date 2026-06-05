const testFunction = require("../src/exercise_12.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: negative number throws error", function: testFunction, input: [-1], expected: 'Cannot factory negative number', expectThrow: true },
    { name: "EDGE: 0! → 0 zeros", function: testFunction, input: [0], expected: 0 },
    { name: "EDGE: 1! → 0 zeros", function: testFunction, input: [1], expected: 0 },
    { name: "EDGE: 4! → 0 zeros", function: testFunction, input: [4], expected: 0 },

    // ================= BASIC CASES =================
    { name: "BASIC: 5! → 1 zero", function: testFunction, input: [5], expected: 1 },
    { name: "BASIC: 6! → 1 zero", function: testFunction, input: [6], expected: 1 },
    { name: "BASIC: 10! → 2 zeros", function: testFunction, input: [10], expected: 2 },

    // ================= MULTIPLE OF 5 =================
    { name: "MULTIPLE: 15! → 3 zeros", function: testFunction, input: [15], expected: 3 },
    { name: "MULTIPLE: 20! → 4 zeros", function: testFunction, input: [20], expected: 4 },

    // ================= POWER OF 5 =================
    { name: "POWER: 25! → 6 zeros", function: testFunction, input: [25], expected: 6 },
    { name: "POWER: 50! → 12 zeros", function: testFunction, input: [50], expected: 12 },
    { name: "POWER: 125! → 31 zeros", function: testFunction, input: [125], expected: 31 },

    // ================= LARGE VALUES =================
    { name: "LARGE: 100! → 24 zeros", function: testFunction, input: [100], expected: 24 },
    { name: "LARGE: 1000! → 249 zeros", function: testFunction, input: [1000], expected: 249 },

    // ================= DECIMAL INPUT =================
    { name: "DECIMAL: 5.5 behaves like floor division", function: testFunction, input: [5.5], expected: 1 },

    // ================= STRING INPUT =================
    { name: "STRING: '10' → 2 zeros", function: testFunction, input: ["10"], expected: 2 }

];

runTestcases(testCases, __filename);