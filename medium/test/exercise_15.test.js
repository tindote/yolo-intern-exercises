const testFunction = require("../src/exercise_15.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: 0 → 0", function: testFunction, input: [0], expected: 0 },

    // ================= BASIC =================
    { name: "BASIC: 123 → 6", function: testFunction, input: [123], expected: 6 },
    { name: "BASIC: 4567 → 22", function: testFunction, input: [4567], expected: 22 },

    // ================= SINGLE DIGIT =================
    { name: "SINGLE: 7 → 7", function: testFunction, input: [7], expected: 7 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: -123 → 6", function: testFunction, input: [-123], expected: 6 },
    { name: "NEGATIVE: -999 → 27", function: testFunction, input: [-999], expected: 27 },

    // ================= NUMBER WITH ZERO =================
    { name: "ZERO DIGITS: 1005 → 6", function: testFunction, input: [1005], expected: 6 },
    { name: "ZERO DIGITS: 9090 → 18", function: testFunction, input: [9090], expected: 18 },

    // ================= ALL ZEROS EXCEPT ONE =================
    { name: "SPARSE: 1000000 → 1", function: testFunction, input: [1000000], expected: 1 },

    // ================= LARGE NUMBER =================
    { name: "LARGE: 123456789 → 45", function: testFunction, input: [123456789], expected: 45 },

    // ================= REPEATED DIGITS =================
    { name: "REPEATED: 111111 → 6", function: testFunction, input: [111111], expected: 6 },

    // ================= PALINDROME =================
    { name: "PALINDROME: 12321 → 9", function: testFunction, input: [12321], expected: 9 },

    // ================= VERY LARGE NUMBER =================
    { name: "VERY LARGE: 999999999 → 81", function: testFunction, input: [999999999], expected: 81 },

    // ================= STRESS PATTERN =================
    { name: "STRESS: 987654321 → 45", function: testFunction, input: [987654321], expected: 45 }

];

runTestcases(testCases, __filename);