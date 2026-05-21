const testFunction = require("../src/exercise_03.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EVEN - EVEN =================
    { name: "EVEN-EVEN: 2 4 → Both numbers are even", input: [2, 4], expected: "Both numbers are even" },
    { name: "EVEN-EVEN: 0 8 → Both numbers are even", input: [0, 8], expected: "Both numbers are even" },
    { name: "EVEN-EVEN: 1000000 2000000 → Both numbers are even", input: [1000000, 2000000], expected: "Both numbers are even" },

    // ================= ODD - ODD =================
    { name: "ODD-ODD: 1 3 → Both numbers are odd", input: [1, 3], expected: "Both numbers are odd" },
    { name: "ODD-ODD: -1 -5 → Both numbers are odd", input: [-1, -5], expected: "Both numbers are odd" },
    { name: "ODD-ODD: -7 9 → Both numbers are odd", input: [-7, 9], expected: "Both numbers are odd" },

    // ================= MIXED =================
    { name: "MIXED: 2 3 → One even and one odd", input: [2, 3], expected: "One even and one odd" },
    { name: "MIXED: 7 10 → One even and one odd", input: [7, 10], expected: "One even and one odd" },
    { name: "MIXED: -2 3 → One even and one odd", input: [-2, 3], expected: "One even and one odd" },
    { name: "MIXED: -3 4 → One even and one odd", input: [-3, 4], expected: "One even and one odd" },

    // ================= EDGE CASE =================
    { name: "EDGE: 0 0 → Both numbers are even", input: [0, 0], expected: "Both numbers are even" },
    { name: "EDGE: 0 1 → One even and one odd", input: [0, 1], expected: "One even and one odd" },
    { name: "EDGE: 0 -1 → One even and one odd", input: [0, -1], expected: "One even and one odd" },

    // ================= SIGN VARIATIONS =================
    { name: "SIGN: -2 -4 → Both numbers are even", input: [-2, -4], expected: "Both numbers are even" },
    { name: "SIGN: -2 4 → Both numbers are even", input: [-2, 4], expected: "Both numbers are even" }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(tc.name, () => testFunction(...tc.input), tc.expected);
}