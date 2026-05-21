const testFunction = require("../src/exercise_18.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: empty string → ''", input: ["", 0, 5], expected: "" },
    { name: "EDGE: length 0 → ''", input: ["hello", 2, 0], expected: "" },

    // ================= BASIC =================
    { name: "BASIC: cut 'hello' from 0 length 5 → 'hello'", input: ["hello", 0, 5], expected: "hello" },
    { name: "BASIC: cut 'hello' from 1 length 3 → 'ell'", input: ["hello", 1, 3], expected: "ell" },
    { name: "BASIC: cut 'javascript' from 4 length 6 → 'script'", input: ["javascript", 4, 6], expected: "script" },

    // ================= SINGLE CHARACTER =================
    { name: "SINGLE: cut one character from 'abc' → 'b'", input: ["abc", 1, 1], expected: "b" },

    // ================= FULL STRING =================
    { name: "FULL: cut entire string 'test'", input: ["test", 0, 4], expected: "test" },

    // ================= SPACES =================
    { name: "SPACE: cut 'hello world' from 5 length 1 → ' '", input: ["hello world", 5, 1], expected: " " },

    // ================= SPECIAL CHARACTERS =================
    { name: "SPECIAL: cut '@#$%^' from 1 length 3 → '#$%'", input: ["@#$%^", 1, 3], expected: "#$%" },

    // ================= NUMERIC STRING =================
    { name: "NUMBER STRING: cut '123456' from 2 length 3 → '345'", input: ["123456", 2, 3], expected: "345" },

    // ================= INVALID CASES =================
    { name: "INVALID: negative start index → THROW", input: ["hello", -1, 2], expected: null, expectThrow: true },
    { name: "INVALID: start index out of bounds → THROW", input: ["hello", 10, 1], expected: null, expectThrow: true },
    { name: "INVALID: negative length → THROW", input: ["hello", 1, -2], expected: null, expectThrow: true },
    { name: "INVALID: start + length exceeds string length → THROW", input: ["hello", 3, 5], expected: null, expectThrow: true },

    // ================= LARGE STRING =================
    { name: "LARGE: cut long string section", input: ["abcdefghijklmnopqrstuvwxyz", 5, 15], expected: "fghijklmnopqrst" }
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