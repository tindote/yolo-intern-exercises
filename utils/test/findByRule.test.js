const testFunction = require("../findByRule.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EMPTY ARRAY =================
    { name: "EDGE: empty array", input: [[], (a, b) => a > b], expected: null },

    // ================= FIND MAX =================
    { name: "MAX: find max number", input: [[1, 5, 3, 9, 2], (current, result) => current > result], expected: 9 },
    { name: "MAX: all negative numbers", input: [[-10, -5, -20, -1], (current, result) => current > result], expected: -1 },

    // ================= FIND MIN =================
    { name: "MIN: find min number", input: [[5, 3, 9, 1, 7], (current, result) => current < result], expected: 1 },
    { name: "MIN: negative numbers", input: [[-10, -5, -20, -1], (current, result) => current < result], expected: -20 },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: find max decimal", input: [[1.1, 5.5, 3.3, 9.9], (current, result) => current > result], expected: 9.9 },

    // ================= STRING LENGTH =================
    { name: "STRING: longest string", input: [["hi", "hello", "javascript", "code"], (current, result) => current.length > result.length], expected: "javascript" },

    // ================= BOOLEAN VALUES =================
    { name: "BOOLEAN: find first true", input: [[false, false, true, false], (current, result) => current === true && result === false], expected: true },

    // ================= SAME VALUES =================
    { name: "SAME: all same values", input: [[5, 5, 5, 5], (current, result) => current > result], expected: 5 },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: one element array", input: [[42], (current, result) => current > result], expected: 42 },

    // ================= OBJECT VALUES =================
    { name: "OBJECT: find oldest person", input: [[{ name: "A", age: 20 }, { name: "B", age: 30 }, { name: "C", age: 25 }], (current, result) => current.age > result.age], expected: { name: "B", age: 30 } },

    // ================= CUSTOM RULE =================
    { name: "CUSTOM: find shortest string", input: [["javascript", "hi", "code"], (current, result) => current.length < result.length], expected: "hi" }

];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected,
        { expectThrow: tc.expectThrow }
    );
}