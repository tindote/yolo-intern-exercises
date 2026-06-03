const testFunction = require("../src/exercise_17.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: empty string → ''", function: testFunction, input: ["", 0, 0], expected: "" },

    // ================= BASIC =================
    { name: "BASIC: cut 'hello' from 0 to 5 → 'hello'", function: testFunction, input: ["hello", 0, 5], expected: "hello" },
    { name: "BASIC: cut 'hello' from 1 to 4 → 'ell'", function: testFunction, input: ["hello", 1, 4], expected: "ell" },
    { name: "BASIC: cut 'javascript' from 4 to 10 → 'script'", function: testFunction, input: ["javascript", 4, 10], expected: "script" },

    // ================= SINGLE CHARACTER =================
    { name: "SINGLE: cut one character from 'abc' → 'b'", function: testFunction, input: ["abc", 1, 2], expected: "b" },

    // ================= FULL STRING =================
    { name: "FULL: cut entire string 'test'", function: testFunction, input: ["test", 0, 4], expected: "test" },

    // ================= SPACES =================
    { name: "SPACE: cut 'hello world' from 5 to 6 → ' '", function: testFunction, input: ["hello world", 5, 6], expected: " " },

    // ================= SPECIAL CHARACTERS =================
    { name: "SPECIAL: cut '@#$%^' from 1 to 4 → '#$%'", function: testFunction, input: ["@#$%^", 1, 4], expected: "#$%" },

    // ================= NUMERIC STRING =================
    { name: "NUMBER STRING: cut '123456' from 2 to 5 → '345'", function: testFunction, input: ["123456", 2, 5], expected: "345" },

    // ================= START EQUAL END =================
    { name: "EDGE: start equal end → ''", function: testFunction, input: ["hello", 2, 2], expected: "" },

    // ================= INVALID INDICES =================
    { name: "INVALID: negative start index → THROW", function: testFunction, input: ["hello", -1, 3], expected: 'Invalid start or end index', expectThrow: true },
    { name: "INVALID: end index out of bounds → THROW", function: testFunction, input: ["hello", 0, 10], expected: 'Invalid start or end index', expectThrow: true },
    { name: "INVALID: start greater than end → THROW", function: testFunction, input: ["hello", 4, 2], expected: 'Invalid start or end index', expectThrow: true },

    // ================= LARGE STRING =================
    { name: "LARGE: cut long string section", function: testFunction, input: ["abcdefghijklmnopqrstuvwxyz", 5, 20], expected: "fghijklmnopqrst" }

];

runTestcases(testCases, __filename);