const testFunction = require("../src/exercise_09.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: [] & [] → 0", function: testFunction, input: [[], []], expected: 0 },
    { name: "EDGE: [1,2,3] & [] → 0", function: testFunction, input: [[1, 2, 3], []], expected: 0 },
    { name: "EDGE: [] & [1,2,3] → 0", function: testFunction, input: [[], [1, 2, 3]], expected: 0 },

    // ================= BASIC =================
    { name: "BASIC: [1,2,3] & [2,3,4] → 2", function: testFunction, input: [[1, 2, 3], [2, 3, 4]], expected: 2 },

    // ================= ALL SAME =================
    { name: "ALL SAME: [1,2,3] & [1,2,3] → 3", function: testFunction, input: [[1, 2, 3], [1, 2, 3]], expected: 3 },

    // ================= NO MATCH =================
    { name: "NO MATCH: [1,2,3] & [4,5,6] → 0", function: testFunction, input: [[1, 2, 3], [4, 5, 6]], expected: 0 },

    // ================= DUPLICATE IN arrA =================
    { name: "DUP arrA: [1,1,1] & [1] → 3", function: testFunction, input: [[1, 1, 1], [1]], expected: 3 },

    // ================= DUPLICATE IN arrB =================
    { name: "DUP arrB: [1,2,3] & [1,1,1] → 1", function: testFunction, input: [[1, 2, 3], [1, 1, 1]], expected: 1 },

    // ================= DUPLICATE BOTH =================
    { name: "DUP BOTH: [1,1,2,2] & [1,2] → 4", function: testFunction, input: [[1, 1, 2, 2], [1, 2]], expected: 4 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-1,-2,-3] & [-2,-3,-4] → 2", function: testFunction, input: [[-1, -2, -3], [-2, -3, -4]], expected: 2 },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-1,0,1] & [0,2,-1] → 2", function: testFunction, input: [[-1, 0, 1], [0, 2, -1]], expected: 2 },

    // ================= ZERO =================
    { name: "ZERO: [0,0,1] & [0,2] → 2", function: testFunction, input: [[0, 0, 1], [0, 2]], expected: 2 },

    // ================= STRING VALUES =================
    { name: "STRING: ['a','b'] & ['b','c'] → 1", function: testFunction, input: [["a", "b"], ["b", "c"]], expected: 1 },

    // ================= BOOLEAN VALUES =================
    { name: "BOOLEAN: [true,false] & [false] → 1", function: testFunction, input: [[true, false], [false]], expected: 1 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: [1000,2000,3000] & [3000,4000] → 1", function: testFunction, input: [[1000, 2000, 3000], [3000, 4000]], expected: 1 },

    // ================= STRESS PATTERN =================
    { name: "STRESS: repeated mixed elements", function: testFunction, input: [[1, 2, 3, 1, 2, 3, 4, 5], [2, 3, 5]], expected: 5 }

];

runTestcases(testCases, __filename);