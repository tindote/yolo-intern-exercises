/**
 * Test function
 * Purpose:
 * 1. Executes a function and compares its result with the expected value
 * 2. Supports both normal value testing and error (throw) testing
 * 3. Logs PASS / FAIL / ERROR with file location for debugging
 * 4. Tracks total, passed, and failed test counts
 *
 * Flow:
 * 1. Get caller file location for debugging purposes
 * 2. Execute the test function (fn)
 * 3. If expectThrow is enabled:
 *      - Fail if no error is thrown
 * 4. If normal test:
 *      - Compare actual vs expected using deep equality check
 * 5. If an error is thrown:
 *      - Pass if expectThrow is true
 *      - Otherwise mark as ERROR
 *
 * @param {String} name name of test case
 * @param {*} fn function of test case
 * @param {*} expected 
 * @param {Boolean} options 
 * @returns 
 */
const countModule = require("../lib/testCounter");
const increasePass = countModule.increasePass;
const increaseFail = countModule.increaseFail;
const increaseTest = countModule.increaseTest;
const pushFail = countModule.pushFail;

/**
 * Test function
 */
function test(name, fn, expected, options = {}) {
    const file = new Error().stack.split("\n")[2].trim();

    try {
        const actual = fn();

        if (options.expectThrow) {
            increaseTest();
            increaseFail();

            pushFail({
                name,
                file,
                expected: "THROW",
                actual,
                type: "FAIL"
            });

            console.log(`\nLocation: ${file}`);
            console.log(`❌ FAIL - ${name}`);
            console.log(`expected: THROW`);
            console.log(`actual  : ${actual}\n`);
            return;
        }

        const pass = isEqual(expected, actual);
        increaseTest();

        if (pass) {
            increasePass();
            console.log(`✅ PASS - ${name}`);
        } else {
            increaseFail();

            pushFail({
                name,
                file,
                expected,
                actual,
                type: "FAIL"
            });

            console.log(`\nLocation: ${file}`);
            console.log(`❌ FAIL - ${name}`);
            console.log(`expected: ${expected}`);
            console.log(`actual  : ${actual}\n`);
        }

    } catch (err) {
        
        increaseTest();
        if (options.expectThrow) {
            increasePass();
            console.log(`✅ PASS - ${name} (throws as expected)`);
            return;
        }
        
        increaseFail();
        pushFail({
            name,
            file,
            expected,
            actual: err.message,
            type: "ERROR"
        });

        console.log(`💥 ERROR - ${name}`);
        console.log(err.message);
    }
}

module.exports = { test };

// Function to compare deeper
function isEqual(expected, actual){
    // Handle strict equality for primitive values
    if (actual === expected) return true;

    // Handle null cases
    if (actual == null || expected == null) return false;

    // Handle non-object types (primitive mismatch case)
    if (typeof actual !== "object" || typeof expected !== "object") {
        return false;
    }

    // Handle array type mismatch
    if (Array.isArray(actual) !== Array.isArray(expected)) return false;

    // Handle object/array key length mismatch
    const keysActual = Object.keys(actual);
    const keysExpected = Object.keys(expected);

    if (keysActual.length !== keysExpected.length) return false;

    // Handle recursive deep comparison of each key
    for (let key of keysActual) {
        if (!isEqual(actual[key], expected[key])) return false;
    }

    return true;
}