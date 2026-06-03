
/**
 * Check if two arrays contain same values
 * regardless of order
 */

const testFunction = require('../src/exercise_01');
/**
 * Test cases
 */

const testCases = [
    // VALID CASES
    {
        name: "VALID: positive integers",
        input: [1, 2, 3],
        expected: true
    },

    {
        name: "VALID: duplicate numbers",
        input: [1, 1, 2],
        expected: true
    },

    {
        name: "VALID: negative numbers",
        input: [-1, -2, -3],
        expected: true
    },

    {
        name: "VALID: decimal numbers",
        input: [1.5, 2.5, 3.5],
        expected: true
    },

    {
        name: "VALID: zeros",
        input: [0, 0, 0],
        expected: true
    },

    {
        name: "VALID: large numbers",
        input: [999999, 888888, 777777],
        expected: true
    },

    // ERROR CASES
    {
        name: "ERROR: first argument is string",
        input: ["1", 2, 3],
        expectThrow: true
    },

    {
        name: "ERROR: second argument is undefined",
        input: [1, undefined, 3],
        expectThrow: true
    },

    {
        name: "ERROR: third argument is object",
        input: [1, 2, {}],
        expectThrow: true
    },

    {
        name: "ERROR: all arguments invalid",
        input: [[], {}, "3"],
        expectThrow: true
    },

    {
        name: "ERROR: null input",
        input: [null, 1, 2],
        expectThrow: true
    },

    {
        name: "ERROR: boolean input",
        input: [true, 1, 2],
        expectThrow: true
    }
];

