let passedTests = [];
let failedTests = [];

/**
 * Function to push test into array
 * After test executor, if testcase passed, push into passedTests
 * else, push into failedTests
 * 
 * @param {TestCase} TestCase need to push 
 */
function pushTest(test) {
    //if testcase passed
    if (test.pass === true) {
        passedTests.push(test);
        //if testcase failed
    } else {
        failedTests.push(test);
    }
}

/**
 * Function to return test result
 * 
 * @returns {Object} object include two arrays
 */
function getTests() {
    return { passedTests, failedTests };
}

/**
 * function to print report after test all function
 * 
 * 
 */
function report() {
    // sumary all fail tests
    if (failedTests.length !== 0) {
        console.log('============ All failed tests ===========');
        for (testcase of failedTests) {
            console.log(`Location: ${testcase.location}`);
            testcase.print();
        }
    }
    // sumary all tests
    console.log(`
        =============== SUMARY ================
        Total tests: ${passedTests.length + failedTests.length}
        Passed tests: ${passedTests.length}
        Failed tests: ${failedTests.length}
        `);
}
module.exports = { pushTest, getTests, report };     