const isEqual = require("../src-lib/isEqual");

describe("isEqual", () => {
    test.each([
        [1, 1, true],
        [1, 2, false],
        ["abc", "abc", true],
        [null, null, true],
        [null, {}, false],
        [{ a: 1 }, { a: 1 }, true],
        [{ a: 1 }, { a: 2 }, false],
        [[1, 2], [1, 2], true],
        [[1, 2], [1, 3], false],
        [[], {}, false],
    ])(
        "isEqual(%o, %o) => %s",
        (expected, actual, result) => {
            expect(isEqual(expected, actual)).toBe(result);
        }
    );
});