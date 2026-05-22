const testFunction = require("../src/exercise_02");
const { test } = require("../../lib/test");

const testCases = [

    // ================= BASIC CASES =================
    { name: "[BASIC] 2^3 = 8", fn: () => testFunction(2, 3), expected: 8 },
    { name: "[BASIC] 5^2 = 25", fn: () => testFunction(5, 2), expected: 25 },

    // ================= EDGE CASES =================
    { name: "[EDGE] 2^0 = 1", fn: () => testFunction(2, 0), expected: 1 },
    { name: "[EDGE] 10^0 = 1", fn: () => testFunction(10, 0), expected: 1 },
    { name: "[EDGE] 0^3 = 0", fn: () => testFunction(0, 3), expected: 0 },

    // ================= NEGATIVE EXPONENT =================
    { name: "[NEGATIVE] 2^-2 = 0.25", fn: () => testFunction(2, -2), expected: 0.25 },
    { name: "[NEGATIVE] 4^-1 = 0.25", fn: () => testFunction(4, -1), expected: 0.25 },
    { name: "[NEGATIVE] 10^-3 = 0.001", fn: () => testFunction(10, -3), expected: 0.001 },

    // ================= NEGATIVE BASE =================
    { name: "[NEGATIVE BASE] (-2)^3 = -8", fn: () => testFunction(-2, 3), expected: -8 },
    { name: "[NEGATIVE BASE] (-2)^2 = 4", fn: () => testFunction(-2, 2), expected: 4 },
    { name: "[NEGATIVE BASE] (-3)^4 = 81", fn: () => testFunction(-3, 4), expected: 81 },

    // ================= MIXED CASE =================
    { name: "[MIXED] (-2)^-2 = 0.25", fn: () => testFunction(-2, -2), expected: 0.25 },

    // ================= THROW CASES =================
    { name: "[THROW] 0^0 should throw error", fn: () => testFunction(0, 0), expected: null, expectThrow: true },
    { name: "[THROW] 0^-1 should throw error", fn: () => testFunction(0, -1), expected: null, expectThrow: true },

    // ================= TYPE CHECK ==================
    { name: "INVALID input must be integers", fn: () => testFunction(3, "hello"), expected: null, expectThrow: true },
    { name: "INVALID input must be integers", fn: () => testFunction(1.5, 3), expected: null, expectThrow: true },
    { name: "INVALID input must be integers", fn: () => testFunction([1,2,3], 1,3), expected: null, expectThrow: true },
    { name: "INVALID input must be integers", fn: () => testFunction(3, true), expected: null, expectThrow: true },
        
];

console.log(`\n===== TESTING: ${testFunction.name} =====`);

for (const tc of testCases) {
    test(tc.name, tc.fn, tc.expected, {
        expectThrow: tc.expectThrow || false
    });
}