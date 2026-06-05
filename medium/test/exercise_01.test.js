const testFunction = require("../src/exercise_01.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] → []", function: testFunction, input: [[], "tăng"], expected: [] },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [5] → [5] (tăng)", function: testFunction, input: [[5], "tăng"], expected: [5] },
    { name: "SINGLE: [5] → [5] (giảm)", function: testFunction, input: [[5], "giảm"], expected: [5] },

    // ================= BASIC ASCENDING =================
    { name: "TĂNG: [3,1,2] → [1,2,3]", function: testFunction, input: [[3, 1, 2], "tăng"], expected: [1, 2, 3] },

    // ================= BASIC DESCENDING =================
    { name: "GIẢM: [3,1,2] → [3,2,1]", function: testFunction, input: [[3, 1, 2], "giảm"], expected: [3, 2, 1] },

    // ================= ALREADY SORTED =================
    { name: "TĂNG sorted: [1,2,3] → [1,2,3]", function: testFunction, input: [[1, 2, 3], "tăng"], expected: [1, 2, 3] },
    { name: "GIẢM sorted: [3,2,1] → [3,2,1]", function: testFunction, input: [[3, 2, 1], "giảm"], expected: [3, 2, 1] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE TĂNG: [-3,-1,-2] → [-3,-2,-1]", function: testFunction, input: [[-3, -1, -2], "tăng"], expected: [-3, -2, -1] },

    // ================= MIXED VALUES =================
    { name: "MIXED TĂNG: [-1,0,1] → [-1,0,1]", function: testFunction, input: [[-1, 0, 1], "tăng"], expected: [-1, 0, 1] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE TĂNG: [2,2,1,1] → [1,1,2,2]", function: testFunction, input: [[2, 2, 1, 1], "tăng"], expected: [1, 1, 2, 2] },

    // ================= ZERO =================
    { name: "ZERO: [0,3,-3] → [-3,0,3]", function: testFunction, input: [[0, 3, -3], "tăng"], expected: [-3, 0, 3] },

    // ================= LARGE NUMBERS =================
    { name: "LARGE TĂNG", function: testFunction, input: [[1000000, 999999, 123456], "tăng"], expected: [123456, 999999, 1000000] },
    { name: "LARGE GIẢM", function: testFunction, input: [[1000000, 999999, 123456], "giảm"], expected: [1000000, 999999, 123456] },

    // ================= RULE EDGE =================
    { name: "STRESS: random mix 10 elements", function: testFunction, input: [[5, 1, 9, 3, 7, 2, 8, 6, 4, 0], "tăng"], expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },

    { name: "STRESS: duplicates heavy", function: testFunction, input: [[3, 3, 3, 2, 2, 1, 1, 1, 4, 4], "tăng"], expected: [1, 1, 1, 2, 2, 3, 3, 3, 4, 4] },

    { name: "STRESS: mixed sign long", function: testFunction, input: [[10, -5, 3, 0, -1, 8, -2, 6, 4, -3], "tăng"], expected: [-5, -3, -2, -1, 0, 3, 4, 6, 8, 10] },

    // ================= TYPE CHECK ==================
    { name: "INVALID: input must be array", function: testFunction, input: [{}], expected: "Input must be array", expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: ["hello"], expected: "Input must be array", expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: [1], expected: "Input must be array", expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: [true], expected: "Input must be array", expectThrow: true },

    { name: "INVALID: all element must be number", function: testFunction, input: [[0, "1.5", 2, 3], "tăng"], expected: "All element of array must be number", expectThrow: true },
    { name: "INVALID: all element must be number", function: testFunction, input: [[0, true, 2, 3], "tăng"], expected: "All element of array must be number", expectThrow: true },
    { name: "INVALID: all element must be number", function: testFunction, input: [[0, null, 2, 3], "tăng"], expected: "All element of array must be number", expectThrow: true },

    { name: 'INVALID: rule must be "tăng" or "giảm"', function: testFunction, input: [[0, 1, 2, 3], "căng"], expected: 'input rule must be "tăng" or "giảm"', expectThrow: true },

];

runTestcases(testCases, __filename);