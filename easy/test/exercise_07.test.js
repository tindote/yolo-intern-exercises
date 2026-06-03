const testFunction = require("../src/exercise_07.js");
const runTestcases = require('../../lib/runTestcases.js');

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: [1,2,3,4] → 4", function: testFunction, input: [[1, 2, 3, 4]], expected: 4 },
    { name: "BASIC: [1,3,5] → 9", function: testFunction, input: [[1, 3, 5]], expected: 9 },

    // ================= EMPTY =================
    { name: "EDGE: [] → 0", function: testFunction, input: [[]], expected: 0 },

    // ================= ALL ODD =================
    { name: "ALL ODD: [1,3,5,7] → 16", function: testFunction, input: [[1, 3, 5, 7]], expected: 16 },

    // ================= ALL EVEN =================
    { name: "ALL EVEN: [2,4,6,8] → 0", function: testFunction, input: [[2, 4, 6, 8]], expected: 0 },

    // ================= MIXED =================
    { name: "MIXED: [1,2,3,4,5,6] → 9", function: testFunction, input: [[1, 2, 3, 4, 5, 6]], expected: 9 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-1,-2,-3,-4] → -4", function: testFunction, input: [[-1, -2, -3, -4]], expected: -4 },
    { name: "NEGATIVE MIX: [-1,-3,-5] → -9", function: testFunction, input: [[-1, -3, -5]], expected: -9 },
    { name: "NEGATIVE MIX: [-2,-3,-4,-5] → -8", function: testFunction, input: [[-2, -3, -4, -5]], expected: -8 },

    // ================= ZERO =================
    { name: "ZERO: [0,1,2,3] → 4", function: testFunction, input: [[0, 1, 2, 3]], expected: 4 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [999999,1000000,777777] → 1777776", function: testFunction, input: [[999999, 1000000, 777777]], expected: 1777776 },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [1,1,1,2] → 3", function: testFunction, input: [[1, 1, 1, 2]], expected: 3 },

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