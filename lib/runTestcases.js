/** 
 * Function to run all testcases in array
 * 1. loop through array
 * 2. each time call function testExecutor
 * 
 * @param {array} testCases - array store testcases
 */
const testExecutor = require('../lib/testExecutor');
const TestCase = require('./testcase');
function runTestCases(testCases, location){
    for(testcase of testCases){
        testExecutor(new TestCase(testcase.name, testcase.function, testcase.input, testcase.expected, testcase.expectThrow, location));
    }
}
module.exports = runTestCases;