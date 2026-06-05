const TestCase = require("../src-lib/TestCase");

describe("TestCase constructor", () => {
    test.each([
        {
            name: "full arguments",
            args: [
                "sum test",
                jest.fn(),
                [1, 2],
                3,
                true,
                "/test.js"
            ],
            expected: {
                input: [1, 2],
                expectThrow: true,
                location: "/test.js"
            }
        },
        {
            name: "default values",
            args: [
                "default test",
                jest.fn(),
                undefined,
                10
            ],
            expected: {
                input: [],
                expectThrow: false,
                location: null
            }
        }
    ])("$name", ({ args, expected }) => {
        const testCase = new TestCase(...args);

        expect(testCase.input).toEqual(expected.input);
        expect(testCase.expectThrow).toBe(expected.expectThrow);
        expect(testCase.location).toBe(expected.location);

        expect(testCase.pass).toBe(false);
        expect(testCase.actual).toBeNull();
    });
}); 

describe("TestCase.print", () => {
    test.each([
        [true, "PASS"],
        [false, "FAIL"]
    ])("should print %s result", (pass, result) => {
        const spy = jest.spyOn(console, "log").mockImplementation(() => { });

        const testCase = new TestCase(
            "test",
            jest.fn(),
            [1],
            2
        );

        testCase.actual = 2;
        testCase.pass = pass;

        testCase.print();

        expect(spy).toHaveBeenCalledWith(
            expect.stringContaining(result)
        );

        spy.mockRestore();
    });
});