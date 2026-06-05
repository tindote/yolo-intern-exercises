    const testFunction = require("../src/exercise_04.js");
    const runTestcases = require('../../lib/src-lib/runTestcases.js');

    const testCases = [

        // ================= BASIC =================
        { name: "BASIC: [1,2,3,4] → 2 evens", function: testFunction, input: [[1, 2, 3, 4]], expected: 2 },
        { name: "BASIC: [2,4,6] → 3 evens", function: testFunction, input: [[2, 4, 6]], expected: 3 },

        // ================= EMPTY =================
        { name: "EDGE: [] → 0 evens", function: testFunction, input: [[]], expected: 0 },

        // ================= ALL EVEN =================
        { name: "ALL EVEN: [2,4,6,8] → 4 evens", function: testFunction, input: [[2, 4, 6, 8]], expected: 4 },

        // ================= ALL ODD =================
        { name: "ALL ODD: [1,3,5,7] → 0 evens", function: testFunction, input: [[1, 3, 5, 7]], expected: 0 },

        // ================= MIXED =================
        { name: "MIXED: [1,2,3,4,5,6] → 3 evens", function: testFunction, input: [[1, 2, 3, 4, 5, 6]], expected: 3 },

        // ================= NEGATIVE NUMBERS =================
        { name: "NEGATIVE: [-2,-3,-4,-5] → 2 evens", function: testFunction, input: [[-2, -3, -4, -5]], expected: 2 },

        // ================= ZERO =================
        { name: "ZERO: [0,1,2] → 2 evens", function: testFunction, input: [[0, 1, 2]], expected: 2 },

        // ================= LARGE NUMBERS =================
        { name: "LARGE: [1000000,999999,888888] → 2 evens", function: testFunction, input: [[1000000, 999999, 888888]], expected: 2 },

        // ================= TYPE CHECK ==================
        { name: "INVALID: input must be array", function: testFunction, input: [{}], expected: 'Input must be array', expectThrow: true },
        { name: "INVALID: input must be array", function: testFunction, input: ['hello'], expected: 'Input must be array', expectThrow: true },
        { name: "INVALID: input must be array", function: testFunction, input: [1], expected: 'Input must be array', expectThrow: true },
        { name: "INVALID: input must be array", function: testFunction, input: [true], expected: 'Input must be array', expectThrow: true },

        { name: "INVALID: all element must be integer", function: testFunction, input: [[0, 1.5, 2, 3]], expected: 'All element of array must be integer', expectThrow: true },
        { name: "INVALID: all element must be integer", function: testFunction, input: [[0, "1.5", 2, 3]], expected: 'All element of array must be number', expectThrow: true },
        { name: "INVALID: all element must be integer", function: testFunction, input: [[0, true, 2, 3]], expected: 'All element of array must be number', expectThrow: true },
        { name: "INVALID: all element must be integer", function: testFunction, input: [[0, null, 2, 3]], expected: 'All element of array must be number', expectThrow: true },

    ];

    runTestcases(testCases, __filename);