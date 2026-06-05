const testFunction = require("../src/findByRule.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= EMPTY ARRAY =================
    { name: "EDGE: empty array", function: testFunction, input: [[], (a, b) => a > b], expected: null },

    // ================= FIND MAX =================
    { name: "MAX: find max number", function: testFunction, input: [[1, 5, 3, 9, 2], (current, result) => current > result], expected: 9 },
    { name: "MAX: all negative numbers", function: testFunction, input: [[-10, -5, -20, -1], (current, result) => current > result], expected: -1 },

    // ================= FIND MIN =================
    { name: "MIN: find min number", function: testFunction, input: [[5, 3, 9, 1, 7], (current, result) => current < result], expected: 1 },
    { name: "MIN: negative numbers", function: testFunction, input: [[-10, -5, -20, -1], (current, result) => current < result], expected: -20 },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: find max decimal", function: testFunction, input: [[1.1, 5.5, 3.3, 9.9], (current, result) => current > result], expected: 9.9 },

    // ================= STRING LENGTH =================
    { name: "STRING: longest string", function: testFunction, input: [["hi", "hello", "javascript", "code"], (current, result) => current.length > result.length], expected: "javascript" },

    // ================= BOOLEAN VALUES =================
    { name: "BOOLEAN: find first true", function: testFunction, input: [[false, false, true, false], (current, result) => current === true && result === false], expected: true },

    // ================= SAME VALUES =================
    { name: "SAME: all same values", function: testFunction, input: [[5, 5, 5, 5], (current, result) => current > result], expected: 5 },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: one element array", function: testFunction, input: [[42], (current, result) => current > result], expected: 42 },
    // ================= CUSTOM RULE =================
    { name: "CUSTOM: find shortest string", function: testFunction, input: [["javascript", "hi", "code"], (current, result) => current.length < result.length], expected: "hi" }

];

runTestcases(testCases, __filename);