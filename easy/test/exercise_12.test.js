const testFunction = require("../src/exercise_12.js");
const runTestcases = require('../../lib/src-lib/runTestcases.js');

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] → null", function: testFunction, input: [[]], expected: null },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [5] → 5", function: testFunction, input: [[5]], expected: 5 },
    { name: "SINGLE: [-10] → -10", function: testFunction, input: [[-10]], expected: -10 },
    { name: "SINGLE: [0] → 0", function: testFunction, input: [[0]], expected: 0 },

    // ================= BASIC =================
    { name: "BASIC: [1,2,3,4] → 2.5", function: testFunction, input: [[1, 2, 3, 4]], expected: 2.5 },

    // ================= EVEN DISTRIBUTION =================
    { name: "EVEN: [2,4,6,8] → 5", function: testFunction, input: [[2, 4, 6, 8]], expected: 5 },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: [-1,-2,-3,-4] → -2.5", function: testFunction, input: [[-1, -2, -3, -4]], expected: -2.5 },

    // ================= MIXED SIGN =================
    { name: "MIXED: [-10,0,10] → 0", function: testFunction, input: [[-10, 0, 10]], expected: 0 },

    // ================= ZERO HEAVY =================
    { name: "ZERO MIX: [0,0,0,5] → 1.25", function: testFunction, input: [[0, 0, 0, 5]], expected: 1.25 },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: [1.5,2.5,3.5] → 2.5", function: testFunction, input: [[1.5, 2.5, 3.5]], expected: 2.5 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,2000000,3000000] → 2000000", function: testFunction, input: [[1000000, 2000000, 3000000]], expected: 2000000 },

    // ================= FLOATING POINT CHECK =================
    { name: "FLOAT: [1,2,2] → 1.6666666667", function: testFunction, input: [[1, 2, 2]], expected: 1.6666666666666667 },

    // ================= TYPE CHECK ==================
    { name: "INVALID: input must be array", function: testFunction, input: [{}], expected: 'Input must be array', expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: ["hello"], expected: 'Input must be array', expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: [1], expected: 'Input must be array', expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: [true], expected: 'Input must be array', expectThrow: true },

    { name: "INVALID: all element must be number", function: testFunction, input: [[0, "1.5", 2, 3]], expected: 'All element of array must be number', expectThrow: true },
    { name: "INVALID: all element must be number", function: testFunction, input: [[0, true, 2, 3]], expected: 'All element of array must be number', expectThrow: true },
    { name: "INVALID: all element must be number", function: testFunction, input: [[0, null, 2, 3]], expected: 'All element of array must be number', expectThrow: true }

];

runTestcases(testCases, __filename);