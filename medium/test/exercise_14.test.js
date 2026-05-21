const testFunction = require("../src/exercise_14.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= EDGE CASES =================
    { name: "EDGE: empty income list → 0", input: [], expected: 0 },

    // ================= UNDER 20M =================
    { name: "LOW TAX: [10000000] → 500000", input: [10000000], expected: 500000 },
    { name: "LOW TAX: [20000000] → 1000000", input: [20000000], expected: 1000000 },

    // ================= 20M TO 50M =================
    { name: "MID TAX: [30000000] → 3000000", input: [30000000], expected: 3000000 },
    { name: "MID TAX: [50000000] → 5000000", input: [50000000], expected: 5000000 },

    // ================= OVER 50M =================
    { name: "HIGH TAX: [60000000] → 12000000", input: [60000000], expected: 12000000 },
    { name: "HIGH TAX: [100000000] → 20000000", input: [100000000], expected: 20000000 },

    // ================= MIXED BRACKETS =================
    { name: "MIXED: [10000000,30000000,60000000] → 15500000", input: [10000000, 30000000, 60000000], expected: 15500000 },

    // ================= MULTIPLE LOW INCOMES =================
    { name: "MULTI LOW: [1000000,2000000,3000000] → 300000", input: [1000000, 2000000, 3000000], expected: 300000 },

    // ================= MULTIPLE MID INCOMES =================
    { name: "MULTI MID: [25000000,30000000] → 5500000", input: [25000000, 30000000], expected: 5500000 },

    // ================= MULTIPLE HIGH INCOMES =================
    { name: "MULTI HIGH: [60000000,70000000] → 26000000", input: [60000000, 70000000], expected: 26000000 },

    // ================= ZERO INCOME =================
    { name: "ZERO: [0] → 0", input: [0], expected: 0 },

    // ================= NEGATIVE INCOME =================
    { name: "NEGATIVE: [-10000000] → -500000", input: [-10000000], expected: -500000 },

    // ================= LARGE VALUES =================
    { name: "LARGE: [1000000000] → 200000000", input: [1000000000], expected: 200000000 },

    // ================= STRESS PATTERN =================
    { name: "STRESS: mixed repeated incomes", input: [10000000, 30000000, 60000000, 15000000, 45000000], expected: 20750000 }
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(
        tc.name,
        () => testFunction(tc.input),
        tc.expected
    );
}