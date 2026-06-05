const testFunction = require("../src/exercise_13.js");
const runTestcases = require('../../lib/src-lib/runTestcases.js');

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] → []", function: testFunction, input: [[]], expected: [] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [1] → [1]", function: testFunction, input: [[1]], expected: [1] },

    // ================= BASIC =================
    { name: "BASIC: [1,2,3] → [3,2,1]", function: testFunction, input: [[1, 2, 3]], expected: [3, 2, 1] },
    { name: "BASIC: [10,20,30,40] → [40,30,20,10]", function: testFunction, input: [[10, 20, 30, 40]], expected: [40, 30, 20, 10] },

    // ================= ODD LENGTH =================
    { name: "ODD: [1,2,3,4,5] → [5,4,3,2,1]", function: testFunction, input: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-1,-2,-3] → [-3,-2,-1]", function: testFunction, input: [[-1, -2, -3]], expected: [-3, -2, -1] },

    // ================= MIXED SIGN =================
    { name: "MIXED: [-1,0,1] → [1,0,-1]", function: testFunction, input: [[-1, 0, 1]], expected: [1, 0, -1] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [5,5,5] → [5,5,5]", function: testFunction, input: [[5, 5, 5]], expected: [5, 5, 5] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,999999,123456] → [123456,999999,1000000]", function: testFunction, input: [[1000000, 999999, 123456]], expected: [123456, 999999, 1000000] },

    // ================= ZERO =================
    { name: "ZERO: [0,1,2,3] → [3,2,1,0]", function: testFunction, input: [[0, 1, 2, 3]], expected: [3, 2, 1, 0] },

    // ================= CHECK IMMUTABILITY =================
    { name: "IMMUTABILITY: original array not changed", function: testFunction, input: [[1, 2, 3]], expected: [3, 2, 1] },

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