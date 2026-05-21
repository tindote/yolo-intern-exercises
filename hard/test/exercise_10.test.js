const testFunction = require("../src/exercise_10.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: empty array", input: [], expected: [] },
    { name: "EDGE: single element", input: [1], expected: [1] },

    // ================= BASIC CASES =================
    { name: "BASIC: array length preserved", input: [1, 2, 3, 4, 5], expectedLength: 5 },
    { name: "BASIC: shuffled array contains same elements", input: [1, 2, 3, 4, 5], expectedElements: [1, 2, 3, 4, 5] },

    // ================= DUPLICATES =================
    { name: "DUPLICATE: duplicate values preserved", input: [1, 1, 2, 2, 3], expectedElements: [1, 1, 2, 2, 3] },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: negative values preserved", input: [-1, -2, -3, -4], expectedElements: [-1, -2, -3, -4] },

    // ================= MIXED VALUES =================
    { name: "MIXED: mixed positive negative zero", input: [-1, 0, 1, 2], expectedElements: [-1, 0, 1, 2] },

    // ================= DECIMAL NUMBERS =================
    { name: "DECIMAL: decimal values preserved", input: [1.1, 2.2, 3.3], expectedElements: [1.1, 2.2, 3.3] },

    // ================= STRINGS =================
    { name: "STRING: string elements preserved", input: ["a", "b", "c"], expectedElements: ["a", "b", "c"] },

    // ================= LARGE ARRAY =================
    { name: "LARGE: large array length preserved", input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expectedLength: 10 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => {
            const result = testFunction([...tc.input]);

            // check empty / single directly
            if (tc.expected) {
                return result;
            }

            // check length
            if (tc.expectedLength !== undefined) {
                return result.length === tc.expectedLength;
            }

            // check same elements after sort
            if (tc.expectedElements) {
                return JSON.stringify([...result].sort()) === JSON.stringify([...tc.expectedElements].sort());
            }
        },
        tc.expected ?? true
    );
}