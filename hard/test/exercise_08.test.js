const testFunction = require("../src/exercise_08.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= BASIC CASES =================
    { name: "BASIC: 1000 → 1 bill", input: 1000, expected: 1 },
    { name: "BASIC: 2000 → 1 bill", input: 2000, expected: 1 },
    { name: "BASIC: 5000 → 1 bill", input: 5000, expected: 1 },
    { name: "BASIC: 10000 → 1 bill", input: 10000, expected: 1 },

    // ================= MULTIPLE BILLS =================
    { name: "MULTI: 3000 → 2 bills (2000 + 1000)", input: 3000, expected: 2 },
    { name: "MULTI: 7000 → 2 bills (5000 + 2000)", input: 7000, expected: 2 },
    { name: "MULTI: 15000 → 2 bills (10000 + 5000)", input: 15000, expected: 2 },
    { name: "MULTI: 17000 → 3 bills (10000 + 5000 + 2000)", input: 17000, expected: 3 },

    // ================= LARGE VALUES =================
    { name: "LARGE: 500000 → 1 bill", input: 500000, expected: 1 },
    { name: "LARGE: 600000 → 2 bills (500000 + 100000)", input: 600000, expected: 2 },
    { name: "LARGE: 750000 → 4 bills", input: 750000, expected: 4 },

    // ================= MIXED VALUES =================
    { name: "MIXED: 888000 → mixed bills", input: 888000, expected: 11 },
    { name: "MIXED: 123000 → mixed bills", input: 123000, expected: 5 },

    // ================= EDGE CASES =================
    { name: "EDGE: 0 → 0 bills", input: 0, expected: 0 },
    { name: "EDGE: smallest valid amount", input: 1000, expected: 1 },

    // ================= EXACT COMBINATIONS =================
    { name: "EXACT: 111000", input: 111000, expected: 3 },
    { name: "EXACT: 222000", input: 222000, expected: 5 },

    // ================= RANDOM VALUES =================
    { name: "RANDOM: 356000", input: 356000, expected: 6 },
    { name: "RANDOM: 999000", input: 999000, expected: 13 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => testFunction(tc.input),
        tc.expected
    );
}