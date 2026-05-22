const fs = require("fs");
const countModule = require("../lib/testCounter");
const testSumary = countModule.getSumary;

const folders = ["easy", "medium", "hard", "utils"];

// ================= RUN TESTS =================
for (const level of folders) {
    const path = `C:\\Users\\tinbo\\yolo-intern-exercises/${level}/test`;
    const files = fs.readdirSync(path);

    console.log(`\n======================= ${level.toUpperCase()} =======================`);

    for (const file of files) {
        if (file.endsWith(".test.js")) {
            require(`${path}/${file}`);
        }
    }
}

// ================= SUMMARY =================
const result = testSumary();
const fails = result.failArray;

if (fails.length !== 0) {
    console.log("\n=========== FAILS SUMMARY ===========");

    for (const fail of fails) {
        console.log(`\n❌ ${fail.type}`);
        console.log(`📌 Name     : ${fail.name}`);
        console.log(`📂 File     : ${fail.file}`);
        console.log(`🎯 Expected : ${fail.expected}`);
        console.log(`📥 Actual   : ${fail.actual}`);
    }
}

console.log(`\n=========== OVERALL SUMMARY ===========`);
console.log(`📋 Total test   : ${result.countTest}`);
console.log(`✅ Passed       : ${result.countPass}`);
console.log(`❌ Failed       : ${result.countFail}`);