const testFunction = require("../src/exercise_08.js");
const runTestcases = require('../../lib/runTestcases.js');

const testCases = [

    // ================= BASIC CASES =================
    { name: "BASIC: 1000 → 1 bill", function: testFunction, input: [1000], expected: 1 },
    { name: "BASIC: 2000 → 1 bill", function: testFunction, input: [2000], expected: 1 },
    { name: "BASIC: 5000 → 1 bill", function: testFunction, input: [5000], expected: 1 },
    { name: "BASIC: 10000 → 1 bill", function: testFunction, input: [10000], expected: 1 },

    // ================= MULTIPLE BILLS =================
    { name: "MULTI: 3000 → 2 bills", function: testFunction, input: [3000], expected: 2 },
    { name: "MULTI: 7000 → 2 bills", function: testFunction, input: [7000], expected: 2 },
    { name: "MULTI: 15000 → 2 bills", function: testFunction, input: [15000], expected: 2 },
    { name: "MULTI: 17000 → 3 bills", function: testFunction, input: [17000], expected: 3 },

    // ================= LARGE VALUES =================
    { name: "LARGE: 500000 → 1 bill", function: testFunction, input: [500000], expected: 1 },
    { name: "LARGE: 600000 → 2 bills", function: testFunction, input: [600000], expected: 2 },
    { name: "LARGE: 750000 → 4 bills", function: testFunction, input: [750000], expected: 4 },

    // ================= MIXED VALUES =================
    { name: "MIXED: 888000 → 11 bills", function: testFunction, input: [888000], expected: 11 },
    { name: "MIXED: 123000 → 5 bills", function: testFunction, input: [123000], expected: 5 },

    // ================= EDGE CASES =================
    { name: "EDGE: 0 → 0 bills", function: testFunction, input: [0], expected: 0 },

    // ================= EXACT COMBINATIONS =================
    { name: "EXACT: 111000 → 3 bills", function: testFunction, input: [111000], expected: 3 },
    { name: "EXACT: 222000 → 5 bills", function: testFunction, input: [222000], expected: 5 },

    // ================= RANDOM VALUES =================
    { name: "RANDOM: 356000 → 6 bills", function: testFunction, input: [356000], expected: 6 },
    { name: "RANDOM: 999000 → 13 bills", function: testFunction, input: [999000], expected: 13 },

];

runTestcases(testCases, __filename);