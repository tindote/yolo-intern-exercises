const testFunction = require("../src/exercise_01.js");
const runTestcases = require('../../lib/src-lib/runTestcases.js');

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: empty string → ''", function: testFunction, input: [""], expected: "" },
    { name: "EDGE: single character → same character", function: testFunction, input: ["a"], expected: "a" },
    { name: "EDGE: single word → reversed word", function: testFunction, input: ["hello"], expected: "olleh" },

    // ================= BASIC =================
    { name: "BASIC: 'hello world' → 'olleh dlrow'", function: testFunction, input: ["hello world"], expected: "olleh dlrow" },
    { name: "BASIC: 'javascript is fun' → reversed chars in each word", function: testFunction, input: ["javascript is fun"], expected: "tpircsavaj si nuf" },

    // ================= MULTIPLE SPACES =================
    { name: "SPACE: multiple spaces between words", function: testFunction, input: ["hello  world"], expected: "olleh  dlrow" },
    { name: "SPACE: leading and trailing spaces", function: testFunction, input: [" hello world "], expected: " olleh dlrow " },

    // ================= NUMBERS =================
    { name: "NUMBER STRING: '123 456' → '321 654'", function: testFunction, input: ["123 456"], expected: "321 654" },

    // ================= SPECIAL CHARACTERS =================
    { name: "SPECIAL: '@bc !de' → 'cb@ ed!'", function: testFunction, input: ["@bc !de"], expected: "cb@ ed!" },

    // ================= MIXED CONTENT =================
    { name: "MIXED: 'ab12 cd34' → '21ba 43dc'", function: testFunction, input: ["ab12 cd34"], expected: "21ba 43dc" },

    // ================= ONE LETTER WORDS =================
    { name: "SINGLE LETTER WORDS: 'a b c' → same", function: testFunction, input: ["a b c"], expected: "a b c" },

    // ================= LARGE STRING =================
    { name: "LARGE: long sentence reverse", function: testFunction, input: ["the quick brown fox jumps over the lazy dog"], expected: "eht kciuq nworb xof spmuj revo eht yzal god" }

];

runTestcases(testCases, __filename);