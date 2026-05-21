const testFunction = require("../isNumber.js");
const { test } = require("../../lib/test.js");

const testCases = [

    // ================= POSITIVE NUMBERS =================
    { name: "POSITIVE: integer number", input: 5, expected: true },
    { name: "POSITIVE: decimal number", input: 3.14, expected: true },

    // ================= NEGATIVE NUMBERS =================
    { name: "NEGATIVE: negative integer", input: -10, expected: true },
    { name: "NEGATIVE: negative decimal", input: -5.5, expected: true },

    // ================= ZERO =================
    { name: "ZERO: 0", input: 0, expected: true },
    { name: "ZERO: -0", input: -0, expected: true },

    // ================= SPECIAL NUMBER VALUES =================
    { name: "SPECIAL: Infinity", input: Infinity, expected: true },
    { name: "SPECIAL: -Infinity", input: -Infinity, expected: true },
    { name: "SPECIAL: NaN", input: NaN, expected: true },

    // ================= STRING VALUES =================
    { name: "STRING: numeric string", input: "123", expected: false },
    { name: "STRING: decimal string", input: "3.14", expected: false },
    { name: "STRING: text string", input: "hello", expected: false },

    // ================= BOOLEAN VALUES =================
    { name: "BOOLEAN: true", input: true, expected: false },
    { name: "BOOLEAN: false", input: false, expected: false },

    // ================= NULL / UNDEFINED =================
    { name: "NULL: null", input: null, expected: false },
    { name: "UNDEFINED: undefined", input: undefined, expected: false },

    // ================= OBJECT VALUES =================
    { name: "OBJECT: empty object", input: {}, expected: false },
    { name: "OBJECT: object with number", input: { value: 5 }, expected: false },

    // ================= ARRAY VALUES =================
    { name: "ARRAY: empty array", input: [], expected: false },
    { name: "ARRAY: number array", input: [1, 2, 3], expected: false },

    // ================= FUNCTION VALUES =================
    { name: "FUNCTION: arrow function", input: () => { }, expected: false },
    { name: "FUNCTION: normal function", input: function () { }, expected: false }

];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {

    test(
        tc.name,
        () => testFunction(tc.input),
        tc.expected,
        { expectThrow: tc.expectThrow }
    );
}