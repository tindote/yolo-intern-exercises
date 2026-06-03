const testFunction = require("../src/exercise_13.js");
const runTestcases = require("../../lib/runTestcases.js");

const testCases = [

    // ================= BASIC: FIRST 2 HOURS =================
    { name: "BASIC: 1 hour stay (10 → 11) → 70", function: testFunction, input: [10, 11], expected: 70 },
    { name: "BASIC: 2 hour stay (10 → 12) → 140", function: testFunction, input: [10, 12], expected: 140 },

    // ================= BASIC: AFTER 2 HOURS =================
    { name: "BASIC: 3 hour stay (10 → 13) → 190", function: testFunction, input: [10, 13], expected: 190 },
    { name: "BASIC: 5 hour stay (8 → 13) → 290", function: testFunction, input: [8, 13], expected: 290 },

    // ================= EDGE CASE =================
    { name: "EDGE: same check-in and check-out (10 → 10) → 0", function: testFunction, input: [10, 10], expected: 0 },

    // ================= OVERNIGHT =================
    { name: "OVERNIGHT: 22 → 6 → 160", function: testFunction, input: [22, 6], expected: 160 },
    { name: "OVERNIGHT: 23 → 7 → 160", function: testFunction, input: [23, 7], expected: 160 },

    // ================= OVERNIGHT WITH EXTRA AFTER 8AM =================
    { name: "OVERNIGHT EXTRA: 22 → 9 → 200", function: testFunction, input: [22, 9], expected: 200 },
    { name: "OVERNIGHT EXTRA: 20 → 10 → 240", function: testFunction, input: [20, 10], expected: 240 },
    { name: "OVERNIGHT EXTRA: 18 → 12 → 320", function: testFunction, input: [18, 12], expected: 320 },

    // ================= EARLY MORNING =================
    { name: "EARLY: 0 → 2 → 140", function: testFunction, input: [0, 2], expected: 140 },

    // ================= DECIMAL HOURS =================
    { name: "DECIMAL: 10 → 11.5 → 105", function: testFunction, input: [10, 11.5], expected: 105 },
    { name: "DECIMAL: 10 → 13.5 → 215", function: testFunction, input: [10, 13.5], expected: 215 },

    // ================= LARGE DAYTIME STAY =================
    { name: "LONG DAY: 6 → 18 → 640", function: testFunction, input: [6, 18], expected: 640 },

    // ================= OVERNIGHT EDGE =================
    { name: "OVERNIGHT EDGE: 23 → 8 → 160", function: testFunction, input: [23, 8], expected: 160 },

    // ================= STRESS PATTERN =================
    { name: "STRESS: 21 → 11 → 280", function: testFunction, input: [21, 11], expected: 280 }

];

runTestcases(testCases, __filename);