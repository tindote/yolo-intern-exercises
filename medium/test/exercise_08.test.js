const testFunction = require("../src/exercise_08.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: find 'world' in 'hello world' → 6", input: ["hello world", "world"], expected: 6 },

    // ================= MATCH AT START =================
    { name: "START: find 'hello' in 'hello world' → 0", input: ["hello world", "hello"], expected: 0 },

    // ================= MATCH AT END =================
    { name: "END: find 'world' in 'say world' → 4", input: ["say world", "world"], expected: 4 },

    // ================= FULL STRING MATCH =================
    { name: "FULL MATCH: 'abc' in 'abc' → 0", input: ["abc", "abc"], expected: 0 },

    // ================= SINGLE CHARACTER =================
    { name: "SINGLE CHAR: find 'b' in 'abc' → 1", input: ["abc", "b"], expected: 1 },

    // ================= NOT FOUND =================
    { name: "NOT FOUND: find 'xyz' in 'abcdef' → -1", input: ["abcdef", "xyz"], expected: -1 },

    // ================= EMPTY SEARCH STRING =================
    { name: "EMPTY SEARCH: find '' in 'abc' → 0", input: ["abc", ""], expected: 0 },

    // ================= EMPTY SOURCE STRING =================
    { name: "EMPTY SOURCE: find 'a' in '' → -1", input: ["", "a"], expected: -1 },

    // ================= BOTH EMPTY =================
    { name: "BOTH EMPTY: find '' in '' → 0", input: ["", ""], expected: 0 },

    // ================= REPEATED PATTERN =================
    { name: "REPEATED: find 'aaa' in 'aaaaaa' → 0", input: ["aaaaaa", "aaa"], expected: 0 },

    // ================= CASE SENSITIVE =================
    { name: "CASE SENSITIVE: find 'World' in 'hello world' → -1", input: ["hello world", "World"], expected: -1 },

    // ================= SPACES =================
    { name: "SPACES: find 'lo wo' in 'hello world' → 3", input: ["hello world", "lo wo"], expected: 3 },

    // ================= SPECIAL CHARACTERS =================
    { name: "SPECIAL CHAR: find '@#' in 'ab@#cd' → 2", input: ["ab@#cd", "@#"], expected: 2 },

    // ================= NUMBER STRING =================
    { name: "NUMBER STRING: find '123' in '0012345' → 2", input: ["0012345", "123"], expected: 2 },

    // ================= SEARCH LONGER THAN SOURCE =================
    { name: "LONGER SEARCH: find 'abcdef' in 'abc' → -1", input: ["abc", "abcdef"], expected: -1 },

    // ================= STRESS PATTERN =================
    { name: "STRESS: long repeated text", input: ["abcabcabcabcabc", "cab"], expected: 2 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected
    );
}