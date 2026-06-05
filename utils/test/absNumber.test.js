const testFunction = require("../src/absNumber.js");
const runTestCases = require('../../lib/src-lib/runTestcases.js');

// TODO: Add tests for absNumber
const testCases = [
    { name: "POSITIVE: 5 → 5", function: testFunction, input: [5], expected: 5 },
    { name: "POSITIVE: 123 → 123", function: testFunction, input: [123], expected: 123 },

    { name: "NEGATIVE: -5 → 5", function: testFunction, input: [-5], expected: 5 },
    { name: "NEGATIVE: -999 → 999", function: testFunction, input: [-999], expected: 999 },

    { name: "ZERO: 0 → 0", function: testFunction, input: [0], expected: 0 },

    { name: "DECIMAL: 5.5 → 5.5", function: testFunction, input: [5.5], expected: 5.5 },
    { name: "DECIMAL: -3.14 → 3.14", function: testFunction, input: [-3.14], expected: 3.14 },

    { name: "LARGE: large positive number", function: testFunction, input: [999999999], expected: 999999999 },
    { name: "LARGE: large negative number", function: testFunction, input: [-999999999], expected: 999999999 },

    { name: "SPECIAL: Infinity → Infinity", function: testFunction, input: [Infinity], expected: Infinity },
    { name: "SPECIAL: -Infinity → Infinity", function: testFunction, input: [-Infinity], expected: Infinity },
];
runTestCases(testCases, __filename);