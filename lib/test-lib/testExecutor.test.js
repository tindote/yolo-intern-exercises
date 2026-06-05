const testExecutor = require("../src-lib/testExecutor");
const testStore = require("../src-lib/testStore");
const isEqual = require("../src-lib/isEqual");

jest.mock("../src-lib/testStore", () => ({
    pushTest: jest.fn()
}));

jest.mock("../src-lib/isEqual");

describe("testExecutor()", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test.each([
        {
            name: "PASS: actual equals expected",
            fn: () => 3,
            expected: 3,
            expectThrow: false,
            isEqualResult: true,
            pass: true,
            actual: 3
        },
        {
            name: "FAIL: actual not equals expected",
            fn: () => 3,
            expected: 5,
            expectThrow: false,
            isEqualResult: false,
            pass: false,
            actual: 3
        }
    ])("$name", ({
        fn,
        expected,
        expectThrow,
        isEqualResult,
        pass,
        actual
    }) => {

        isEqual.mockReturnValue(isEqualResult);

        const testcase = {
            testFunction: fn,
            input: [],
            expected,
            expectThrow,
            pass: false,
            actual: null,
            print: jest.fn()
        };

        testExecutor(testcase);

        expect(testcase.actual).toBe(actual);
        expect(testcase.pass).toBe(pass);
        expect(testStore.pushTest).toHaveBeenCalledWith(testcase);
        expect(testcase.print).toHaveBeenCalledTimes(1);
    });

    test.each([
        {
            name: "PASS: throw expected error",
            expected: "boom",
            errorMessage: "boom",
            isEqualResult: true,
            pass: true
        },
        {
            name: "FAIL: throw unexpected error",
            expected: "other",
            errorMessage: "boom",
            isEqualResult: false,
            pass: false
        }
    ])("$name", ({
        expected,
        errorMessage,
        isEqualResult,
        pass
    }) => {

        isEqual.mockReturnValue(isEqualResult);

        const testcase = {
            testFunction: () => {
                throw new Error(errorMessage);
            },
            input: [],
            expected,
            expectThrow: true,
            pass: false,
            actual: null,
            print: jest.fn()
        };

        testExecutor(testcase);

        expect(testcase.actual).toBe(errorMessage);
        expect(testcase.pass).toBe(pass);
        expect(testStore.pushTest).toHaveBeenCalledWith(testcase);
        expect(testcase.print).toHaveBeenCalledTimes(1);
    });

    test("FAIL: expect throw but no error occurs", () => {

        isEqual.mockReturnValue(false);

        const testcase = {
            testFunction: () => 123,
            input: [],
            expected: "some error",
            expectThrow: true,
            pass: false,
            actual: null,
            print: jest.fn()
        };

        testExecutor(testcase);

        expect(testcase.actual).toBe(
            "TestCase expect throwing error but error does not occur"
        );

        expect(testcase.pass).toBe(false);
        expect(testStore.pushTest).toHaveBeenCalledWith(testcase);
        expect(testcase.print).toHaveBeenCalledTimes(1);
    });

});