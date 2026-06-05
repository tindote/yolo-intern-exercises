const testFunction = require("../src/sumElementOfArrayByRule.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= EMPTY ARRAY =================
    { name: "EDGE: empty array", function: testFunction, input: [[], (x) => x > 0], expected: 0 },

    // ================= BASIC POSITIVE CONDITION =================
    { name: "POSITIVE: sum only positive numbers", function: testFunction, input: [[-1, 2, -3, 4, 5], (x) => x > 0], expected: 11 },

    // ================= EVEN NUMBERS =================
    { name: "EVEN: sum even numbers", function: testFunction, input: [[1, 2, 3, 4, 5, 6], (x) => x % 2 === 0], expected: 12 },

    // ================= ODD NUMBERS =================
    { name: "ODD: sum odd numbers", function: testFunction, input: [[1, 2, 3, 4, 5], (x) => x % 2 !== 0], expected: 9 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: sum negative numbers", function: testFunction, input: [[-1, -2, 3, 4, -5], (x) => x < 0], expected: -8 },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: sum decimals > 1", function: testFunction, input: [[0.5, 1.5, 2.5, 3.5], (x) => x > 1], expected: 7.5 },

    // ================= ALL MATCH =================
    { name: "ALL: all elements match condition", function: testFunction, input: [[1, 2, 3], (x) => true], expected: 6 },

    // ================= NONE MATCH =================
    { name: "NONE: no elements match condition", function: testFunction, input: [[1, 2, 3], (x) => false], expected: 0 },

    // ================= ZERO VALUES =================
    { name: "ZERO: sum zero values", function: testFunction, input: [[0, 0, 0, 1], (x) => x === 0], expected: 0 },

    // ================= MIXED VALUES =================
    { name: "MIXED: complex condition (x > 2)", function: testFunction, input: [[1, 2, 3, 4, 5], (x) => x > 2], expected: 12 }

];

runTestcases(testCases, __filename);