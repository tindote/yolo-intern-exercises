const testFunction = require("../src/exercise_18.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: empty string → ''", function: testFunction, input: ["", 0, 5], expected: "" },
    { name: "EDGE: length 0 → ''", function: testFunction, input: ["hello", 2, 0], expected: "" },

    // ================= BASIC =================
    { name: "BASIC: cut 'hello' from 0 length 5 → 'hello'", function: testFunction, input: ["hello", 0, 5], expected: "hello" },
    { name: "BASIC: cut 'hello' from 1 length 3 → 'ell'", function: testFunction, input: ["hello", 1, 3], expected: "ell" },
    { name: "BASIC: cut 'javascript' from 4 length 6 → 'script'", function: testFunction, input: ["javascript", 4, 6], expected: "script" },

    // ================= SINGLE CHARACTER =================
    { name: "SINGLE: cut one character from 'abc' → 'b'", function: testFunction, input: ["abc", 1, 1], expected: "b" },

    // ================= FULL STRING =================
    { name: "FULL: cut entire string 'test'", function: testFunction, input: ["test", 0, 4], expected: "test" },

    // ================= SPACES =================
    { name: "SPACE: cut 'hello world' from 5 length 1 → ' '", function: testFunction, input: ["hello world", 5, 1], expected: " " },

    // ================= SPECIAL CHARACTERS =================
    { name: "SPECIAL: cut '@#$%^' from 1 length 3 → '#$%'", function: testFunction, input: ["@#$%^", 1, 3], expected: "#$%" },

    // ================= NUMERIC STRING =================
    { name: "NUMBER STRING: cut '123456' from 2 length 3 → '345'", function: testFunction, input: ["123456", 2, 3], expected: "345" },

    // ================= INVALID CASES =================
    { name: "INVALID: negative start index → THROW", function: testFunction, input: ["hello", -1, 2], expected: 'Invalid start index or length', expectThrow: true },
    { name: "INVALID: start index out of bounds → THROW", function: testFunction, input: ["hello", 10, 1], expected: 'Invalid start index or length', expectThrow: true },
    { name: "INVALID: negative length → THROW", function: testFunction, input: ["hello", 1, -2], expected: 'Invalid start index or length', expectThrow: true },
    { name: "INVALID: start + length exceeds string length → THROW", function: testFunction, input: ["hello", 3, 5], expected: 'Invalid start index or length', expectThrow: true },

    // ================= LARGE STRING =================
    { name: "LARGE: cut long string section", function: testFunction, input: ["abcdefghijklmnopqrstuvwxyz", 5, 15], expected: "fghijklmnopqrst" }

];

runTestcases(testCases, __filename);