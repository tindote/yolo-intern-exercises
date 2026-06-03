const testFunction = require("../src/exercise_02.js");

const testCases = [

    // ================= BASIC RANGES =================
    { name: "BASIC: range 0 → 1", input: [0, 1] },
    { name: "BASIC: range 1 → 10", input: [1, 10] },
    { name: "BASIC: range -10 → 10", input: [-10, 10] },

    // ================= EDGE CASES =================
    { name: "EDGE: negative range (-5 → -1)", input: [-5, -1] },
    { name: "EDGE: decimal range (1.5 → 2.5)", input: [1.5, 2.5] },

    // ================= LARGE VALUES =================
    { name: "LARGE: range 1000000 → 9999999", input: [1000000, 9999999] },

    // ================= SMALL DECIMAL RANGE =================
    { name: "DECIMAL: range 0.001 → 0.009", input: [0.001, 0.009] }
];

