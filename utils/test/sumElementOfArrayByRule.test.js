const testFunction = require("../sumElementOfArrayByRule.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EMPTY ARRAY =================
    {
        name: "EDGE: empty array",
        input: [[], (x) => x > 0],
        expected: 0
    },

    // ================= BASIC POSITIVE CONDITION =================
    {
        name: "POSITIVE: sum only positive numbers",
        input: [[-1, 2, -3, 4, 5], (x) => x > 0],
        expected: 11
    },

    // ================= EVEN NUMBERS =================
    {
        name: "EVEN: sum even numbers",
        input: [[1, 2, 3, 4, 5, 6], (x) => x % 2 === 0],
        expected: 12
    },

    // ================= ODD NUMBERS =================
    {
        name: "ODD: sum odd numbers",
        input: [[1, 2, 3, 4, 5], (x) => x % 2 !== 0],
        expected: 9
    },

    // ================= NEGATIVE NUMBERS =================
    {
        name: "NEGATIVE: sum negative numbers",
        input: [[-1, -2, 3, 4, -5], (x) => x < 0],
        expected: -8
    },

    // ================= DECIMAL NUMBERS =================
    {
        name: "DECIMAL: sum decimals > 1",
        input: [[0.5, 1.5, 2.5, 3.5], (x) => x > 1],
        expected: 7.5
    },

    // ================= ALL MATCH =================
    {
        name: "ALL: all elements match condition",
        input: [[1, 2, 3], (x) => true],
        expected: 6
    },

    // ================= NONE MATCH =================
    {
        name: "NONE: no elements match condition",
        input: [[1, 2, 3], (x) => false],
        expected: 0
    },

    // ================= ZERO VALUES =================
    {
        name: "ZERO: sum zero values",
        input: [[0, 0, 0, 1], (x) => x === 0],
        expected: 0
    },

    // ================= MIXED VALUES =================
    {
        name: "MIXED: complex condition (x > 2)",
        input: [[1, 2, 3, 4, 5], (x) => x > 2],
        expected: 12
    }

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