const testFunction = require("../src/floorNumber.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= POSITIVE INTEGERS =================
    { name: "POSITIVE: integer 5 → 5", function: testFunction, input: [5], expected: 5 },
    { name: "POSITIVE: integer 123 → 123", function: testFunction, input: [123], expected: 123 },

    // ================= POSITIVE DECIMALS =================
    { name: "DECIMAL: 5.9 → 5", function: testFunction, input: [5.9], expected: 5 },
    { name: "DECIMAL: 3.14 → 3", function: testFunction, input: [3.14], expected: 3 },
    { name: "DECIMAL: 0.99 → 0", function: testFunction, input: [0.99], expected: 0 },

    // ================= NEGATIVE INTEGERS =================
    { name: "NEGATIVE: integer -5 → -5", function: testFunction, input: [-5], expected: -5 },
    { name: "NEGATIVE: integer -100 → -100", function: testFunction, input: [-100], expected: -100 },

    // ================= NEGATIVE DECIMALS =================
    { name: "NEGATIVE: -3.14 → -4", function: testFunction, input: [-3.14], expected: -4 },
    { name: "NEGATIVE: -5.9 → -6", function: testFunction, input: [-5.9], expected: -6 },
    { name: "NEGATIVE: -0.1 → -1", function: testFunction, input: [-0.1], expected: -1 },

    // ================= ZERO =================
    { name: "ZERO: 0 → 0", function: testFunction, input: [0], expected: 0 },
    { name: "ZERO: -0 → -0", function: testFunction, input: [-0], expected: -0 },

    // ================= LARGE NUMBERS =================
    { name: "LARGE: large positive decimal", function: testFunction, input: [999999999.999], expected: 999999999 },
    { name: "LARGE: large negative decimal", function: testFunction, input: [-999999999.999], expected: -1000000000 },

];

runTestcases(testCases, __filename);