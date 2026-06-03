/**
 * Test function
 * Purpose:
 * 1. Executes a function and compares its result with the expected value
 * 2. Supports both normal value testing and error (throw) testing
 * 4. Tracks total, passed, and failed test counts
 *
 * Flow:
 * 1. Use try, catch to handle error case
 * 2. use function and push result to testcase.actual
 * 3. compare actual and expect by using function isEqual
 * 4. if compare return true, turn testcase.pass = true, else = false
 * 5. if catch happen, if (expectthrow == true), compare error message with expectmessage, else, return false
 * 6. push testresult to teststore
 *
 * @param {TestCase} TestCase include test information
 */
const testStore = require("./testStore");
const isEqual = require('./isEqual');

function test(testcase) {
    try{
        //call function 
        testcase.actual = testcase.testFunction(...testcase.input);

        //handle case expect throw but not
        if(testcase.expectThrow){
            throw new Error('TestCase expect throwing error but error does not occur');
        }

        //compare expect result with actual
        if(isEqual(testcase.expected, testcase.actual)){
            testcase.pass = true;
        }

        //push testcase to store
        testStore.pushTest(testcase);
    }catch (err) {
        //handle when catch occurs
        testcase.actual = err.message;
        if(testcase.expectThrow){
            if(isEqual(err.message, testcase.expected)){
                testcase.pass = true;
            }
        }
        //push testcase to store
        testStore.pushTest(testcase);
    }
    testcase.print();
}

module.exports = test;
