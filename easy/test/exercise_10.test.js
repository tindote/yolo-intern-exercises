const testFunction = require("../src/exercise_10.js");
const runTestcases = require('../../lib/src-lib/runTestcases.js');

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: empty array → null", function: testFunction, input: [[]], expected: null },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [5] → 5", function: testFunction, input: [[5]], expected: 5 },
    { name: "SINGLE NEGATIVE: [-10] → -10", function: testFunction, input: [[-10]], expected: -10 },
    { name: "SINGLE ZERO: [0] → 0", function: testFunction, input: [[0]], expected: 0 },

    // ================= BASIC ASCENDING =================
    { name: "ASC: [1,2,3,4,5] → 5", function: testFunction, input: [[1, 2, 3, 4, 5]], expected: 5 },

    // ================= BASIC DESCENDING =================
    { name: "DESC: [5,4,3,2,1] → 5", function: testFunction, input: [[5, 4, 3, 2, 1]], expected: 5 },

    // ================= UNSORTED =================
    { name: "UNSORTED: [3,1,9,2,7] → 9", function: testFunction, input: [[3, 1, 9, 2, 7]], expected: 9 },

    // ================= NEGATIVE ONLY =================
    { name: "NEGATIVE ASC: [-5,-4,-3,-2,-1] → -1", function: testFunction, input: [[-5, -4, -3, -2, -1]], expected: -1 },
    { name: "NEGATIVE UNSORTED: [-10,-1,-7,-3] → -1", function: testFunction, input: [[-10, -1, -7, -3]], expected: -1 },

    // ================= MIXED SIGN =================
    { name: "MIXED: [-10,0,10,5,-3] → 10", function: testFunction, input: [[-10, 0, 10, 5, -3]], expected: 10 },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: [5,5,5,5] → 5", function: testFunction, input: [[5, 5, 5, 5]], expected: 5 },
    { name: "DUPLICATE MIXED: [1,9,9,2,9] → 9", function: testFunction, input: [[1, 9, 9, 2, 9]], expected: 9 },

    // ================= ZERO HEAVY =================
    { name: "ZERO MIX: [0,-1,-2,-3] → 0", function: testFunction, input: [[0, -1, -2, -3]], expected: 0 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000000,999999,123456] → 1000000", function: testFunction, input: [[1000000, 999999, 123456]], expected: 1000000 },

    // ================= ORDER STABILITY CHECK =================
    { name: "STABILITY: [7,7,7,7] → 7", function: testFunction, input: [[7, 7, 7, 7]], expected: 7 },

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