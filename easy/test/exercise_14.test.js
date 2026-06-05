const testFunction = require("../src/exercise_14.js");
const runTestcases = require('../../lib/src-lib/runTestcases.js');

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] → -1", function: testFunction, input: [[], 5], expected: -1 },

    // ================= FOUND CASE =================
    { name: "FOUND: [1,2,3] find 2 → index 1", function: testFunction, input: [[1, 2, 3], 2], expected: 1 },

    // ================= NOT FOUND =================
    { name: "NOT FOUND: [1,2,3] find 5 → -1", function: testFunction, input: [[1, 2, 3], 5], expected: -1 },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [10] find 10 → 0", function: testFunction, input: [[10], 10], expected: 0 },
    { name: "SINGLE NOT FOUND → -1", function: testFunction, input: [[10], 5], expected: -1 },

    // ================= MULTIPLE OCCURRENCES =================
    { name: "DUPLICATE: [1,2,2,2,3] find 2 → 1 (first match)", function: testFunction, input: [[1, 2, 2, 2, 3], 2], expected: 1 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-1,-2,-3] find -2 → 1", function: testFunction, input: [[-1, -2, -3], -2], expected: 1 },

    // ================= ZERO =================
    { name: "ZERO: [0,1,2] find 0 → 0", function: testFunction, input: [[0, 1, 2], 0], expected: 0 },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-1,0,1] find 0 → 1", function: testFunction, input: [[-1, 0, 1], 0], expected: 1 },

    // ================= LARGE ARRAY =================
    { name: "LARGE: find last element", function: testFunction, input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10], expected: 9 },

    // ================= TYPE CHECK ==================
    { name: "INVALID: input must be array", function: testFunction, input: [{}, 1], expected: 'Input must be array', expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: ["hello", 1], expected: 'Input must be array', expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: [1, 1], expected: 'Input must be array', expectThrow: true },
    { name: "INVALID: input must be array", function: testFunction, input: [true, 1], expected: 'Input must be array', expectThrow: true },

    { name: "INVALID: all element must be number", function: testFunction, input: [[0, "1.5", 2, 3], 2], expected: 'All element of array must be number', expectThrow: true },
    { name: "INVALID: all element must be number", function: testFunction, input: [[0, true, 2, 3], 2], expected: 'All element of array must be number', expectThrow: true },
    { name: "INVALID: all element must be number", function: testFunction, input: [[0, null, 2, 3], 2], expected: 'All element of array must be number', expectThrow: true },

    { name: "INVALID: value must be number", function: testFunction, input: [[0, 1, 2, 3], "2"], expected: 'value must be a number', expectThrow: true },
    { name: "INVALID: value must be number", function: testFunction, input: [[0, 1, 2, 3], true], expected: 'value must be a number', expectThrow: true },
    { name: "INVALID: value must be number", function: testFunction, input: [[0, 1, 2, 3], [2]], expected: 'value must be a number', expectThrow: true },
    { name: "INVALID: value must be number", function: testFunction, input: [[0, 1, 2, 3], {}], expected: 'value must be a number', expectThrow: true },

];

runTestcases(testCases, __filename);