const testFunction = require("../countByRule.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EMPTY ARRAY =================
    { name: "EDGE: empty array", input: [[], (num) => num % 2 === 0], expected: 0 },

    // ================= EVEN NUMBERS =================
    { name: "EVEN: count even numbers", input: [[1, 2, 3, 4, 5, 6], (num) => num % 2 === 0], expected: 3 },
    { name: "EVEN: all even numbers", input: [[2, 4, 6, 8], (num) => num % 2 === 0], expected: 4 },
    { name: "EVEN: no even numbers", input: [[1, 3, 5, 7], (num) => num % 2 === 0], expected: 0 },

    // ================= ODD NUMBERS =================
    { name: "ODD: count odd numbers", input: [[1, 2, 3, 4, 5], (num) => num % 2 !== 0], expected: 3 },

    // ================= POSITIVE NUMBERS =================
    { name: "POSITIVE: count positive numbers", input: [[-2, -1, 0, 1, 2, 3], (num) => num > 0], expected: 3 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: count negative numbers", input: [[-5, -4, 0, 2, 3], (num) => num < 0], expected: 2 },

    // ================= ZERO VALUES =================
    { name: "ZERO: count zeros", input: [[0, 1, 0, 2, 0], (num) => num === 0], expected: 3 },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: count decimal numbers > 2", input: [[1.1, 2.2, 3.3, 4.4], (num) => num > 2], expected: 3 },

    // ================= STRING LENGTH =================
    { name: "STRING: count strings length > 3", input: [["hi", "hello", "world", "js"], (str) => str.length > 3], expected: 2 },

    // ================= BOOLEAN RULE =================
    { name: "BOOLEAN: count true values", input: [[true, false, true, true], (value) => value === true], expected: 3 },

    // ================= ALL MATCH =================
    { name: "ALL: all elements satisfy rule", input: [[1, 1, 1], (num) => num === 1], expected: 3 },

    // ================= NONE MATCH =================
    { name: "NONE: no elements satisfy rule", input: [[1, 2, 3], (num) => num > 10], expected: 0 }

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