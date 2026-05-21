    const testFunction = require("../absNumber.js");
    const { test } = require("../../lib/test.js");

    // TODO: Add tests for absNumber
    const testCases = [

        // ================= BASIC POSITIVE =================
        { name: "POSITIVE: 5 → 5", input: 5, expected: 5 },
        { name: "POSITIVE: 123 → 123", input: 123, expected: 123 },

        // ================= NEGATIVE NUMBERS =================
        { name: "NEGATIVE: -5 → 5", input: -5, expected: 5 },
        { name: "NEGATIVE: -999 → 999", input: -999, expected: 999 },

        // ================= ZERO =================
        { name: "ZERO: 0 → 0", input: 0, expected: 0 },

        // ================= DECIMAL NUMBERS =================
        { name: "DECIMAL: 5.5 → 5.5", input: 5.5, expected: 5.5 },
        { name: "DECIMAL: -3.14 → 3.14", input: -3.14, expected: 3.14 },

        // ================= LARGE NUMBERS =================
        { name: "LARGE: large positive number", input: 999999999, expected: 999999999 },
        { name: "LARGE: large negative number", input: -999999999, expected: 999999999 },

        // ================= SPECIAL NUMBER VALUES =================
        { name: "SPECIAL: Infinity → Infinity", input: Infinity, expected: Infinity },
        { name: "SPECIAL: -Infinity → Infinity", input: -Infinity, expected: Infinity },
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
