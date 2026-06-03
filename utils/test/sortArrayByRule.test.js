const testFunction = require("../src/sortArrayByRule.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= BASIC ASCENDING =================
    { name: "ASC: basic ascending sort", function: testFunction, input: [[3, 1, 4, 2, 5], (a, b) => a - b], expected: [1, 2, 3, 4, 5] },
    { name: "ASC: already sorted", function: testFunction, input: [[1, 2, 3, 4, 5], (a, b) => a - b], expected: [1, 2, 3, 4, 5] },
    { name: "ASC: reverse sorted", function: testFunction, input: [[5, 4, 3, 2, 1], (a, b) => a - b], expected: [1, 2, 3, 4, 5] },

    // ================= BASIC DESCENDING =================
    { name: "DESC: basic descending sort", function: testFunction, input: [[1, 2, 3, 4, 5], (a, b) => b - a], expected: [5, 4, 3, 2, 1] },

    // ================= EDGE CASE =================
    { name: "EDGE: empty array", function: testFunction, input: [[], (a, b) => a - b], expected: [] },
    { name: "EDGE: single element", function: testFunction, input: [[42], (a, b) => a - b], expected: [42] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: repeated values", function: testFunction, input: [[3, 1, 2, 3, 1], (a, b) => a - b], expected: [1, 1, 2, 3, 3] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: mixed negative numbers", function: testFunction, input: [[-3, -1, -5, -2], (a, b) => a - b], expected: [-5, -3, -2, -1] },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: floating numbers", function: testFunction, input: [[1.5, 0.5, 2.5, 1.0], (a, b) => a - b], expected: [0.5, 1, 1.5, 2.5] },

    // ================= CUSTOM RULE =================
    { name: "CUSTOM: sort by absolute value", function: testFunction, input: [[-10, 5, -2, 3, -1], (a, b) => Math.abs(a) - Math.abs(b)], expected: [-1, -2, 3, 5, -10] },

    // ================= SAME VALUES =================
    { name: "SAME: all equal values", function: testFunction, input: [[2, 2, 2, 2], (a, b) => a - b], expected: [2, 2, 2, 2] }

];

runTestcases(testCases, __filename);