const testFunction = require("../src/exercise_08.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= THROW CASES =================
    { name: "THROW: 2.5 → not integer", input: 2.5, expected: null, expectThrow: true },
    { name: "THROW: '5' string input", input: "5", expected: null, expectThrow: true },
    { name: "THROW: true input", input: true, expected: null, expectThrow: true },
    { name: "THROW: array input", input: [1, 2, 3], expected: null, expectThrow: true },

    // ================= EDGE CASES =================
    { name: "EDGE: 1 → not prime", input: 1, expected: "không" },
    { name: "EDGE: 0 → not prime", input: 0, expected: "không" },
    { name: "EDGE: -5 → not prime", input: -5, expected: "không" },

    // ================= SMALL NUMBERS =================
    { name: "SMALL: 2 → prime", input: 2, expected: "có" },
    { name: "SMALL: 3 → prime", input: 3, expected: "có" },
    { name: "SMALL: 4 → not prime", input: 4, expected: "không" },

    // ================= DIVISIBLE BY 2 / 3 =================
    { name: "DIV 2: 8 → not prime", input: 8, expected: "không" },
    { name: "DIV 3: 9 → not prime", input: 9, expected: "không" },
    { name: "DIV 6: 12 → not prime", input: 12, expected: "không" },

    // ================= PRIME NUMBERS =================
    { name: "PRIME: 5", input: 5, expected: "có" },
    { name: "PRIME: 7", input: 7, expected: "có" },
    { name: "PRIME: 11", input: 11, expected: "có" },
    { name: "PRIME: 13", input: 13, expected: "có" },

    // ================= LOOP CHECK =================
    { name: "LOOP: 25 → not prime", input: 25, expected: "không" },
    { name: "LOOP: 49 → not prime", input: 49, expected: "không" },
    { name: "LOOP: 97 → prime", input: 97, expected: "có" },

    // ================= LARGE NUMBERS =================
    { name: "LARGE PRIME: 101", input: 101, expected: "có" },
    { name: "LARGE NOT PRIME: 121", input: 121, expected: "không" }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(tc.name, () => testFunction(tc.input), tc.expected, {
        expectThrow: tc.expectThrow || false
    });
}