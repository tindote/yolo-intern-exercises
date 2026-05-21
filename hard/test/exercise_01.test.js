const testFunction = require("../src/exercise_01.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: empty string → ''", input: "", expected: "" },
    { name: "EDGE: single character → same character", input: "a", expected: "a" },
    { name: "EDGE: single word → reversed word", input: "hello", expected: "olleh" },

    // ================= BASIC =================
    { name: "BASIC: 'hello world' → 'olleh dlrow'", input: "hello world", expected: "olleh dlrow" },
    { name: "BASIC: 'javascript is fun' → reversed chars in each word", input: "javascript is fun", expected: "tpircsavaj si nuf" },

    // ================= MULTIPLE SPACES =================
    { name: "SPACE: multiple spaces between words", input: "hello  world", expected: "olleh  dlrow" },
    { name: "SPACE: leading and trailing spaces", input: " hello world ", expected: " olleh dlrow " },

    // ================= NUMBERS =================
    { name: "NUMBER STRING: '123 456' → '321 654'", input: "123 456", expected: "321 654" },

    // ================= SPECIAL CHARACTERS =================
    { name: "SPECIAL: '@bc !de' → 'cb@ ed!'", input: "@bc !de", expected: "cb@ ed!" },

    // ================= MIXED CONTENT =================
    { name: "MIXED: 'ab12 cd34' → '21ba 43dc'", input: "ab12 cd34", expected: "21ba 43dc" },

    // ================= ONE LETTER WORDS =================
    { name: "SINGLE LETTER WORDS: 'a b c' → same", input: "a b c", expected: "a b c" },

    // ================= LARGE STRING =================
    { name: "LARGE: long sentence reverse", input: "the quick brown fox jumps over the lazy dog", expected: "eht kciuq nworb xof spmuj revo eht yzal god" }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => testFunction(tc.input),
        tc.expected
    );
}