const testFunction = require("../src/exercise_09.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC CASES =================
    { name: "BASIC: 'a' in 'banana' → 3", input: ["a", "banana"], expected: 3 },
    { name: "BASIC: 'na' in 'banana' → 2", input: ["na", "banana"], expected: 2 },
    { name: "BASIC: 'ban' in 'banana' → 1", input: ["ban", "banana"], expected: 1 },

    // ================= EDGE CASES =================
    { name: "EDGE: empty strA → -1", input: ["", "banana"], expected: -1 },
    { name: "EDGE: empty strB → 0", input: ["abc", ""], expected: 0 },
    { name: "EDGE: both strings empty", input: ["", ""], expected: -1 },

    // ================= NOT FOUND =================
    { name: "NOT FOUND: 'x' in 'banana' → 0", input: ["x", "banana"], expected: 0 },
    { name: "NOT FOUND: longer string not present", input: ["apple", "banana"], expected: 0 },

    // ================= OVERLAPPING CASES =================
    { name: "OVERLAP: 'aa' in 'aaaa' → 3", input: ["aa", "aaaa"], expected: 3 },
    { name: "OVERLAP: 'aba' in 'ababa' → 2", input: ["aba", "ababa"], expected: 2 },

    // ================= CASE SENSITIVE =================
    { name: "CASE: lowercase vs uppercase", input: ["a", "AaaA"], expected: 2 },
    { name: "CASE: exact uppercase match", input: ["A", "AaaA"], expected: 2 },

    // ================= FULL MATCH =================
    { name: "FULL: identical strings", input: ["hello", "hello"], expected: 1 },

    // ================= SINGLE CHARACTER =================
    { name: "CHAR: repeated single character", input: ["z", "zzzzz"], expected: 5 },

    // ================= SPACES =================
    { name: "SPACE: count word with spaces", input: ["hi", "hi hi hi"], expected: 3 },
    { name: "SPACE: count spaces", input: [" ", "a b c"], expected: 2 },

    // ================= SPECIAL CHARACTERS =================
    { name: "SPECIAL: symbol matching", input: ["!!", "!!!!"], expected: 3 },

    // ================= NUMBER STRINGS =================
    { name: "NUMBER: numeric substring", input: ["12", "121212"], expected: 3 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected
    );
}