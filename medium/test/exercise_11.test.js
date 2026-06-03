const testFunction = require("../src/exercise_11.js");


const testCases = [

    // ================= BASIC =================
    { name: "BASIC: random from 0 to 10", input: 10 },
    { name: "BASIC: random from 0 to 100", input: 100 },

    // ================= EDGE CASES =================
    { name: "EDGE: value = 0", input: 0 },
    { name: "EDGE: value = 1", input: 1 },

    // ================= NEGATIVE =================
    { name: "NEGATIVE: value = -10", input: -10 },

    // ================= DECIMAL =================
    { name: "DECIMAL: value = 5.5", input: 5.5 },

    // ================= LARGE NUMBER =================
    { name: "LARGE: value = 1000000", input: 1000000 },

    // ================= SMALL DECIMAL =================
    { name: "SMALL DECIMAL: value = 0.0001", input: 0.0001 }
];

