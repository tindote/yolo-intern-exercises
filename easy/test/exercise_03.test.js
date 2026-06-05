const testFunction = require("../src/exercise_03.js");
const runTestCases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= EVEN - EVEN =================
    { name: "EVEN-EVEN: 2 4 → Both numbers are even", function: testFunction, input: [2, 4], expected: "Both numbers are even" },
    { name: "EVEN-EVEN: 0 8 → Both numbers are even", function: testFunction, input: [0, 8], expected: "Both numbers are even" },
    { name: "EVEN-EVEN: 1000000 2000000 → Both numbers are even", function: testFunction, input: [1000000, 2000000], expected: "Both numbers are even" },

    // ================= ODD - ODD =================
    { name: "ODD-ODD: 1 3 → Both numbers are odd", function: testFunction, input: [1, 3], expected: "Both numbers are odd" },
    { name: "ODD-ODD: -1 -5 → Both numbers are odd", function: testFunction, input: [-1, -5], expected: "Both numbers are odd" },
    { name: "ODD-ODD: -7 9 → Both numbers are odd", function: testFunction, input: [-7, 9], expected: "Both numbers are odd" },

    // ================= MIXED =================
    { name: "MIXED: 2 3 → One even and one odd", function: testFunction, input: [2, 3], expected: "One even and one odd" },
    { name: "MIXED: 7 10 → One even and one odd", function: testFunction, input: [7, 10], expected: "One even and one odd" },
    { name: "MIXED: -2 3 → One even and one odd", function: testFunction, input: [-2, 3], expected: "One even and one odd" },
    { name: "MIXED: -3 4 → One even and one odd", function: testFunction, input: [-3, 4], expected: "One even and one odd" },

    // ================= EDGE CASES =================
    { name: "EDGE: 0 0 → Both numbers are even", function: testFunction, input: [0, 0], expected: "Both numbers are even" },
    { name: "EDGE: 0 1 → One even and one odd", function: testFunction, input: [0, 1], expected: "One even and one odd" },
    { name: "EDGE: 0 -1 → One even and one odd", function: testFunction, input: [0, -1], expected: "One even and one odd" },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: -2 -4 → Both numbers are even", function: testFunction, input: [-2, -4], expected: "Both numbers are even" },

    // ================= INVALID INPUTS =================
    { name: "INVALID: string input", function: testFunction, input: ["2", 3], expected: "All input must be Integer!", expectThrow: true },

    { name: "INVALID: array input", function: testFunction, input: [[1, 2], 3], expected: "All input must be Integer!", expectThrow: true },

    { name: "INVALID: boolean input", function: testFunction, input: [true, 3], expected: "All input must be Integer!", expectThrow: true },

    { name: "INVALID: float input", function: testFunction, input: [1.5, 2], expected: "All input must be Integer!", expectThrow: true },

    { name: "INVALID: NaN input", function: testFunction, input: [NaN, 2], expected: "All input must be Integer!", expectThrow: true },

    { name: "INVALID: Infinity input", function: testFunction, input: [Infinity, 2], expected: "All input must be Integer!", expectThrow: true },

    { name: "INVALID: null input", function: testFunction, input: [null, 2], expected: "All input must be Integer!", expectThrow: true },

    { name: "INVALID: undefined input", function: testFunction, input: [undefined, 2], expected: "All input must be Integer!", expectThrow: true },

    { name: "INVALID: object input", function: testFunction, input: [{}, 2], expected: "All input must be Integer!", expectThrow: true }
];

runTestCases(testCases, __filename);