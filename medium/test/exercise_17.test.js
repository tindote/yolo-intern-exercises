const testFunction = require("../src/exercise_17.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: empty string → ''", input: ["", 0, 0], expected: "" },

    // ================= BASIC =================
    { name: "BASIC: cut 'hello' from 0 to 5 → 'hello'", input: ["hello", 0, 5], expected: "hello" },
    { name: "BASIC: cut 'hello' from 1 to 4 → 'ell'", input: ["hello", 1, 4], expected: "ell" },
    { name: "BASIC: cut 'javascript' from 4 to 10 → 'script'", input: ["javascript", 4, 10], expected: "script" },

    // ================= SINGLE CHARACTER =================
    { name: "SINGLE: cut one character from 'abc' → 'b'", input: ["abc", 1, 2], expected: "b" },

    // ================= FULL STRING =================
    { name: "FULL: cut entire string 'test'", input: ["test", 0, 4], expected: "test" },

    // ================= SPACES =================
    { name: "SPACE: cut 'hello world' from 5 to 6 → ' '", input: ["hello world", 5, 6], expected: " " },

    // ================= SPECIAL CHARACTERS =================
    { name: "SPECIAL: cut '@#$%^' from 1 to 4 → '#$%'", input: ["@#$%^", 1, 4], expected: "#$%" },

    // ================= NUMERIC STRING =================
    { name: "NUMBER STRING: cut '123456' from 2 to 5 → '345'", input: ["123456", 2, 5], expected: "345" },

    // ================= START EQUAL END =================
    { name: "EDGE: start equal end → ''", input: ["hello", 2, 2], expected: "" },

    // ================= INVALID INDICES =================
    { name: "INVALID: negative start index → THROW", input: ["hello", -1, 3], expected: null, expectThrow: true },
    { name: "INVALID: end index out of bounds → THROW", input: ["hello", 0, 10], expected: null, expectThrow: true },
    { name: "INVALID: start greater than end → THROW", input: ["hello", 4, 2], expected: null, expectThrow: true },

    // ================= LARGE STRING =================
    { name: "LARGE: cut long string section", input: ["abcdefghijklmnopqrstuvwxyz", 5, 20], expected: "fghijklmnopqrst" }
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