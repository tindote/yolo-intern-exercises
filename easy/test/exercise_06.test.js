const testFunction = require("../src/exercise_06.js");
const runTestcases = require('../../lib/runTestcases.js');

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: [1,2,3,4] → 6", function: testFunction, input: [[1, 2, 3, 4]], expected: 6 },
    { name: "BASIC: [2,4,6] → 12", function: testFunction, input: [[2, 4, 6]], expected: 12 },

    // ================= EMPTY =================
    { name: "EDGE: [] → 0", function: testFunction, input: [[]], expected: 0 },

    // ================= ALL EVEN =================
    { name: "ALL EVEN: [2,4,6,8] → 20", function: testFunction, input: [[2, 4, 6, 8]], expected: 20 },

    // ================= ALL ODD =================
    { name: "ALL ODD: [1,3,5,7] → 0", function: testFunction, input: [[1, 3, 5, 7]], expected: 0 },

    // ================= MIXED =================
    { name: "MIXED: [1,2,3,4,5,6] → 12", function: testFunction, input: [[1, 2, 3, 4, 5, 6]], expected: 12 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-2,-3,-4,-5] → -6", function: testFunction, input: [[-2, -3, -4, -5]], expected: -6 },
    { name: "NEGATIVE MIX: [-1,-2,3,4] → 2", function: testFunction, input: [[-1, -2, 3, 4]], expected: 2 },

    // ================= ZERO =================
    { name: "ZERO: [0,1,2,3] → 2", function: testFunction, input: [[0, 1, 2, 3]], expected: 2 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,999999,888888] → 1888888", function: testFunction, input: [[1000000, 999999, 888888]], expected: 1888888 },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [2,2,2,3] → 6", function: testFunction, input: [[2, 2, 2, 3]], expected: 6 },

    // ================= TYPE CHECK ==================
    { name: "INVALID: input must be array", function: testFunction, input: [{}], expected: "Input must be array", expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: ["hello"], expected: "Input must be array", expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: [1], expected: "Input must be array", expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: [true], expected: "Input must be array", expectThrow: true },

    { name: "INVALID: all element must be integer", function: testFunction, input: [[0, 1.5, 2, 3]], expected: "All element of array must be integer", expectThrow: true },
    { name: "INVALID: all element must be integer", function: testFunction, input: [[0, "1.5", 2, 3]], expected: "All element of array must be number", expectThrow: true },
    { name: "INVALID: all element must be integer", function: testFunction, input: [[0, true, 2, 3]], expected: "All element of array must be number", expectThrow: true },
    { name: "INVALID: all element must be integer", function: testFunction, input: [[0, null, 2, 3]], expected: "All element of array must be number", expectThrow: true },

];

runTestcases(testCases, __filename);