const testFunction = require("../src/exercise_07.js");
const runTestcases = require('../../lib/runTestcases.js');

const testCases = [

    // ================= BASIC CASES =================
    { name: "BASIC: 0 → không đồng", function: testFunction, input: [0n], expected: "không đồng" },
    { name: "BASIC: 5 → năm đồng", function: testFunction, input: [5n], expected: "năm đồng" },
    { name: "BASIC: 10 → mười đồng", function: testFunction, input: [10n], expected: "mười đồng" },
    { name: "BASIC: 15 → mười lăm đồng", function: testFunction, input: [15n], expected: "mười lăm đồng" },
    { name: "BASIC: 21 → hai mươi mốt đồng", function: testFunction, input: [21n], expected: "hai mươi mốt đồng" },

    // ================= HUNDREDS =================
    { name: "HUNDRED: 100 → một trăm đồng", function: testFunction, input: [100n], expected: "một trăm đồng" },
    { name: "HUNDRED: 115 → một trăm mười lăm đồng", function: testFunction, input: [115n], expected: "một trăm mười lăm đồng" },
    { name: "HUNDRED: 124 → một trăm hai mươi tư đồng", function: testFunction, input: [124n], expected: "một trăm hai mươi tư đồng" },
    { name: "HUNDRED: 999 → chín trăm chín mươi chín đồng", function: testFunction, input: [999n], expected: "chín trăm chín mươi chín đồng" },

    // ================= THOUSANDS =================
    { name: "THOUSAND: 1000", function: testFunction, input: [1000n], expected: "một nghìn đồng" },
    { name: "THOUSAND: 1005", function: testFunction, input: [1005n], expected: "một nghìn không trăm lẻ năm đồng" },
    { name: "THOUSAND: 1010", function: testFunction, input: [1010n], expected: "một nghìn không trăm mười đồng" },
    { name: "THOUSAND: 1100", function: testFunction, input: [1100n], expected: "một nghìn một trăm đồng" },
    { name: "THOUSAND: 1234", function: testFunction, input: [1234n], expected: "một nghìn hai trăm ba mươi tư đồng" },

    // ================= MILLIONS =================
    { name: "MILLION: 1000000", function: testFunction, input: [1000000n], expected: "một triệu đồng" },
    { name: "MILLION: 1000005", function: testFunction, input: [1000005n], expected: "một triệu không trăm lẻ năm đồng" },
    { name: "MILLION: 1234567", function: testFunction, input: [1234567n], expected: "một triệu hai trăm ba mươi tư nghìn năm trăm sáu mươi bảy đồng" },

    // ================= BILLIONS =================
    { name: "BILLION: 1000000000", function: testFunction, input: [1000000000n], expected: "một tỷ đồng" },
    { name: "BILLION: 1234567890", function: testFunction, input: [1234567890n], expected: "một tỷ hai trăm ba mươi tư triệu năm trăm sáu mươi bảy nghìn tám trăm chín mươi đồng" },

    // ================= SPECIAL READING =================
    { name: "SPECIAL: ending with 1 → mốt", function: testFunction, input: [31n], expected: "ba mươi mốt đồng" },
    { name: "SPECIAL: ending with 4 → tư", function: testFunction, input: [24n], expected: "hai mươi tư đồng" },
    { name: "SPECIAL: ending with 5 → lăm", function: testFunction, input: [25n], expected: "hai mươi lăm đồng" },

];

runTestcases(testCases, __filename);