const testFunction = require("../src/exercise_08.js");
const runTestcases = require('../../lib/runTestcases.js');

const testCases = [

    // ================= THROW CASES =================
    { name: "THROW: 2.5 → not integer", function: testFunction, input: [2.5], expected: 'Input must be an integer, provided: 2.5', expectThrow: true },
    { name: "THROW: '5' string input", function: testFunction, input: ["5"], expected: 'Input must be an integer, provided: 5', expectThrow: true },
    { name: "THROW: true input", function: testFunction, input: [true], expected: 'Input must be an integer, provided: true', expectThrow: true },
    { name: "THROW: array input", function: testFunction, input: [[1, 2, 3]], expected: 'Input must be an integer, provided: 1,2,3', expectThrow: true },

    // ================= EDGE CASES =================
    { name: "EDGE: 1 → not prime", function: testFunction, input: [1], expected: "không" },
    { name: "EDGE: 0 → not prime", function: testFunction, input: [0], expected: "không" },
    { name: "EDGE: -5 → not prime", function: testFunction, input: [-5], expected: "không" },

    // ================= SMALL NUMBERS =================
    { name: "SMALL: 2 → prime", function: testFunction, input: [2], expected: "có" },
    { name: "SMALL: 3 → prime", function: testFunction, input: [3], expected: "có" },
    { name: "SMALL: 4 → not prime", function: testFunction, input: [4], expected: "không" },

    // ================= DIVISIBLE BY 2 / 3 =================
    { name: "DIV 2: 8 → not prime", function: testFunction, input: [8], expected: "không" },
    { name: "DIV 3: 9 → not prime", function: testFunction, input: [9], expected: "không" },
    { name: "DIV 6: 12 → not prime", function: testFunction, input: [12], expected: "không" },

    // ================= PRIME NUMBERS =================
    { name: "PRIME: 5", function: testFunction, input: [5], expected: "có" },
    { name: "PRIME: 7", function: testFunction, input: [7], expected: "có" },
    { name: "PRIME: 11", function: testFunction, input: [11], expected: "có" },
    { name: "PRIME: 13", function: testFunction, input: [13], expected: "có" },

    // ================= LOOP CHECK =================
    { name: "LOOP: 25 → not prime", function: testFunction, input: [25], expected: "không" },
    { name: "LOOP: 49 → not prime", function: testFunction, input: [49], expected: "không" },
    { name: "LOOP: 97 → prime", function: testFunction, input: [97], expected: "có" },

    // ================= LARGE NUMBERS =================
    { name: "LARGE PRIME: 101", function: testFunction, input: [101], expected: "có" },
    { name: "LARGE NOT PRIME: 121", function: testFunction, input: [121], expected: "không" }

];

runTestcases(testCases, __filename);