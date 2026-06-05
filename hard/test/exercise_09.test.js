const testFunction = require("../src/exercise_09.js");
const runTestcases = require('../../lib/src-lib/runTestcases.js');

const testCases = [

    // ================= BASIC CASES =================
    { name: "BASIC: 'a' in 'banana' → 3", function: testFunction, input: ["a", "banana"], expected: 3 },
    { name: "BASIC: 'na' in 'banana' → 2", function: testFunction, input: ["na", "banana"], expected: 2 },
    { name: "BASIC: 'ban' in 'banana' → 1", function: testFunction, input: ["ban", "banana"], expected: 1 },

    // ================= EDGE CASES =================
    { name: "EDGE: empty strA → -1", function: testFunction, input: ["", "banana"], expected: -1 },
    { name: "EDGE: empty strB → 0", function: testFunction, input: ["abc", ""], expected: 0 },
    { name: "EDGE: both strings empty", function: testFunction, input: ["", ""], expected: -1 },

    // ================= NOT FOUND =================
    { name: "NOT FOUND: 'x' in 'banana' → 0", function: testFunction, input: ["x", "banana"], expected: 0 },
    { name: "NOT FOUND: longer string not present", function: testFunction, input: ["apple", "banana"], expected: 0 },

    // ================= OVERLAPPING CASES =================
    { name: "OVERLAP: 'aa' in 'aaaa' → 3", function: testFunction, input: ["aa", "aaaa"], expected: 3 },
    { name: "OVERLAP: 'aba' in 'ababa' → 2", function: testFunction, input: ["aba", "ababa"], expected: 2 },

    // ================= CASE SENSITIVE =================
    { name: "CASE: lowercase vs uppercase", function: testFunction, input: ["a", "AaaA"], expected: 2 },
    { name: "CASE: exact uppercase match", function: testFunction, input: ["A", "AaaA"], expected: 2 },

    // ================= FULL MATCH =================
    { name: "FULL: identical strings", function: testFunction, input: ["hello", "hello"], expected: 1 },

    // ================= SINGLE CHARACTER =================
    { name: "CHAR: repeated single character", function: testFunction, input: ["z", "zzzzz"], expected: 5 },

    // ================= SPACES =================
    { name: "SPACE: count word with spaces", function: testFunction, input: ["hi", "hi hi hi"], expected: 3 },
    { name: "SPACE: count spaces", function: testFunction, input: [" ", "a b c"], expected: 2 },

    // ================= SPECIAL CHARACTERS =================
    { name: "SPECIAL: symbol matching", function: testFunction, input: ["!!", "!!!!"], expected: 3 },

    // ================= NUMBER STRINGS =================
    { name: "NUMBER: numeric substring", function: testFunction, input: ["12", "121212"], expected: 3 },

];

runTestcases(testCases, __filename);