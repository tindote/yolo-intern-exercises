const testFunction = require("../src/exercise_08.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= BASIC =================
    { name: "BASIC: find 'world' in 'hello world' → 6", function: testFunction, input: ["hello world", "world"], expected: 6 },

    // ================= MATCH AT START =================
    { name: "START: find 'hello' in 'hello world' → 0", function: testFunction, input: ["hello world", "hello"], expected: 0 },

    // ================= MATCH AT END =================
    { name: "END: find 'world' in 'say world' → 4", function: testFunction, input: ["say world", "world"], expected: 4 },

    // ================= FULL STRING MATCH =================
    { name: "FULL MATCH: 'abc' in 'abc' → 0", function: testFunction, input: ["abc", "abc"], expected: 0 },

    // ================= SINGLE CHARACTER =================
    { name: "SINGLE CHAR: find 'b' in 'abc' → 1", function: testFunction, input: ["abc", "b"], expected: 1 },

    // ================= NOT FOUND =================
    { name: "NOT FOUND: find 'xyz' in 'abcdef' → -1", function: testFunction, input: ["abcdef", "xyz"], expected: -1 },

    // ================= EMPTY SEARCH STRING =================
    { name: "EMPTY SEARCH: find '' in 'abc' → 0", function: testFunction, input: ["abc", ""], expected: 0 },

    // ================= EMPTY SOURCE STRING =================
    { name: "EMPTY SOURCE: find 'a' in '' → -1", function: testFunction, input: ["", "a"], expected: -1 },

    // ================= BOTH EMPTY =================
    { name: "BOTH EMPTY: find '' in '' → 0", function: testFunction, input: ["", ""], expected: 0 },

    // ================= REPEATED PATTERN =================
    { name: "REPEATED: find 'aaa' in 'aaaaaa' → 0", function: testFunction, input: ["aaaaaa", "aaa"], expected: 0 },

    // ================= CASE SENSITIVE =================
    { name: "CASE SENSITIVE: find 'World' in 'hello world' → -1", function: testFunction, input: ["hello world", "World"], expected: -1 },

    // ================= SPACES =================
    { name: "SPACES: find 'lo wo' in 'hello world' → 3", function: testFunction, input: ["hello world", "lo wo"], expected: 3 },

    // ================= SPECIAL CHARACTERS =================
    { name: "SPECIAL CHAR: find '@#' in 'ab@#cd' → 2", function: testFunction, input: ["ab@#cd", "@#"], expected: 2 },

    // ================= NUMBER STRING =================
    { name: "NUMBER STRING: find '123' in '0012345' → 2", function: testFunction, input: ["0012345", "123"], expected: 2 },

    // ================= SEARCH LONGER THAN SOURCE =================
    { name: "LONGER SEARCH: find 'abcdef' in 'abc' → -1", function: testFunction, input: ["abc", "abcdef"], expected: -1 },

    // ================= STRESS PATTERN =================
    { name: "STRESS: long repeated text", function: testFunction, input: ["abcabcabcabcabc", "cab"], expected: 2 }

];

runTestcases(testCases, __filename);