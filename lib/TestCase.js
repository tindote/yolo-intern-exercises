class TestCase {
    constructor(name, testFunction, input = [], expected, expectThrow = false, location = null) {
        this.name = name;
        this.testFunction = testFunction;
        this.input = input;
        this.expected = expected;
        this.expectThrow = expectThrow;
        this.pass = false;
        this.actual = null;

        this.location = location;
    }
    print() {
        console.log(`
            Test: ${this.name}
            Input: ${this.input}
            Expected: ${this.expected}
            Actual: ${this.actual}
            Result: ${this.pass ? "PASS" : "FAIL"}  
        `);
    }
}

module.exports = TestCase;