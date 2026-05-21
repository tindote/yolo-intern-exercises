const testFunction = require("../src/exercise_14.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASE =================
    { name: "EDGE: [] → -1", input: [[], 5], expected: -1 },

    // ================= FOUND CASE =================
    { name: "FOUND: [1,2,3] find 2 → index 1", input: [[1, 2, 3], 2], expected: 1 },

    // ================= NOT FOUND =================
    { name: "NOT FOUND: [1,2,3] find 5 → -1", input: [[1, 2, 3], 5], expected: -1 },

    // ================= SINGLE ELEMENT =================
    { name: "SINGLE: [10] find 10 → 0", input: [[10], 10], expected: 0 },
    { name: "SINGLE NOT FOUND → -1", input: [[10], 5], expected: -1 },

    // ================= MULTIPLE OCCURRENCES =================
    { name: "DUPLICATE: [1,2,2,2,3] find 2 → 1 (first match)", input: [[1, 2, 2, 2, 3], 2], expected: 1 },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: [-1,-2,-3] find -2 → 1", input: [[-1, -2, -3], -2], expected: 1 },

    // ================= ZERO =================
    { name: "ZERO: [0,1,2] find 0 → 0", input: [[0, 1, 2], 0], expected: 0 },

    // ================= MIXED VALUES =================
    { name: "MIXED: [-1,0,1] find 0 → 1", input: [[-1, 0, 1], 0], expected: 1 },

    // ================= LOOSE EQUALITY CHECK (IMPORTANT) =================
    { name: "LOOSE: [1,'2',3] find '2' → 1", input: [[1, '2', 3], '2'], expected: 1 },
    { name: "LOOSE: [1,'2',3] find 2 → 1 (== match)", input: [[1, '2', 3], 2], expected: 1 },

    // ================= LARGE ARRAY =================
    { name: "LARGE: find last element", input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10], expected: 9 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(
        tc.name,
        () => testFunction(...tc.input),
        tc.expected
    );
}