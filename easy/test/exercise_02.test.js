const testFunction = require("../src/exercise_02");
const runTestCases= require('../../lib/runTestcases');

const testCases = [

    // ================= BASIC CASES =================
    { name: "[BASIC] 2^3 = 8",function: testFunction,input: [2, 3], expected: 8 },
    { name: "[BASIC] 5^2 = 25", function: testFunction, input: [5, 2], expected: 25 },

    // ================= EDGE CASES =================
    { name: "[EDGE] 2^0 = 1", function: testFunction, input: [2, 0], expected: 1 },
    { name: "[EDGE] 10^0 = 1", function: testFunction, input: [10, 0], expected: 1 },
    { name: "[EDGE] 0^3 = 0", function: testFunction, input: [0, 3], expected: 0 },

    // ================= NEGATIVE EXPONENT =================
    { name: "[NEGATIVE] 2^-2 = 0.25", function: testFunction, input: [2, -2], expected: 0.25 },
    { name: "[NEGATIVE] 4^-1 = 0.25", function: testFunction, input: [4, -1], expected: 0.25 },
    { name: "[NEGATIVE] 10^-3 = 0.001", function: testFunction, input: [10, -3], expected: 0.001 },

    // ================= NEGATIVE BASE =================
    { name: "[NEGATIVE BASE] (-2)^3 = -8", function: testFunction, input: [-2, 3], expected: -8},
    { name: "[NEGATIVE BASE] (-2)^2 = 4", function: testFunction, input: [-2, 2], expected: 4 },
    { name: "[NEGATIVE BASE] (-3)^4 = 81", function: testFunction, input: [-3, 4], expected: 81 },

    // ================= MIXED CASE =================
    { name: "[MIXED] (-2)^-2 = 0.25", function: testFunction, input: [-2, -2], expected: 0.25 },
    // ================= THROW CASES =================
    { name: "[THROW] 0^0 should throw error", function: testFunction, input: [0, 0], expected: 'Invalid mathematical operation for base 0 and non-positive exponent provided: base = 0, exponent = 0', expectThrow: true },
    { name: "[THROW] 0^-1 should throw error", function: testFunction, input: [0, -1], expected: 'Invalid mathematical operation for base 0 and non-positive exponent provided: base = 0, exponent = -1', expectThrow: true },

    // ================= TYPE CHECK ==================
    { name: "INVALID input must be integers", function: testFunction, input: [3, "hello"], expected: 'All input must be integer!', expectThrow: true },
    { name: "INVALID input must be integers", function: testFunction, input: [1.5, 3], expected: 'All input must be integer!', expectThrow: true },
    { name: "INVALID input must be integers", function: testFunction, input: [[1, 2, 3], 1.3], expected: 'All input must be integer!', expectThrow: true },
    { name: "INVALID input must be integers", function: testFunction, input: [3, true], expected: 'All input must be integer!', expectThrow: true },
        
];

runTestCases(testCases, __filename);