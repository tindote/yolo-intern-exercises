const testFunction = require("../src/isInteger.js");
const runTestcases = require("../../lib/src-lib/runTestcases.js");

const testCases = [

    // ================= POSITIVE INTEGERS =================
    { name: "POSITIVE: integer 5", function: testFunction, input: [5], expected: true },
    { name: "POSITIVE: integer 100", function: testFunction, input: [100], expected: true },

    // ================= NEGATIVE INTEGERS =================
    { name: "NEGATIVE: integer -5", function: testFunction, input: [-5], expected: true },
    { name: "NEGATIVE: integer -100", function: testFunction, input: [-100], expected: true },

    // ================= DECIMALS =================
    { name: "DECIMAL: positive decimal", function: testFunction, input: [3.14], expected: false },
    { name: "DECIMAL: negative decimal", function: testFunction, input: [-2.5], expected: false },
    { name: "DECIMAL: 0.99", function: testFunction, input: [0.99], expected: false },

    // ================= ZERO =================
    { name: "ZERO: 0", function: testFunction, input: [0], expected: true },
    { name: "ZERO: -0", function: testFunction, input: [-0], expected: true },

    // ================= SPECIAL NUMBER VALUES =================
    { name: "SPECIAL: Infinity", function: testFunction, input: [Infinity], expected: false },
    { name: "SPECIAL: -Infinity", function: testFunction, input: [-Infinity], expected: false },
    { name: "SPECIAL: NaN", function: testFunction, input: [NaN], expected: false },

    // ================= STRING VALUES =================
    { name: "STRING: numeric string", function: testFunction, input: ["123"], expected: false },
    { name: "STRING: decimal string", function: testFunction, input: ["3.14"], expected: false },
    { name: "STRING: text string", function: testFunction, input: ["hello"], expected: false },

    // ================= BOOLEAN VALUES =================
    { name: "BOOLEAN: true", function: testFunction, input: [true], expected: false },
    { name: "BOOLEAN: false", function: testFunction, input: [false], expected: false },

    // ================= NULL / UNDEFINED =================
    { name: "NULL: null", function: testFunction, input: [null], expected: false },
    { name: "UNDEFINED: undefined", function: testFunction, input: [undefined], expected: false },

    // ================= OBJECT VALUES =================
    { name: "OBJECT: empty object", function: testFunction, input: [{}], expected: false },
    { name: "OBJECT: object with number", function: testFunction, input: [{ value: 5 }], expected: false },

    // ================= ARRAY VALUES =================
    { name: "ARRAY: empty array", function: testFunction, input: [[]], expected: false },
    { name: "ARRAY: number array", function: testFunction, input: [[1, 2, 3]], expected: false },

    // ================= FUNCTION VALUES =================
    { name: "FUNCTION: arrow function", function: testFunction, input: [() => { }], expected: false },
    { name: "FUNCTION: normal function", function: testFunction, input: [function () { }], expected: false }

];

runTestcases(testCases, __filename);