const fs = require("fs");
const path = require("path");
const { runTests } = require("../src-lib/testRunner");

jest.mock("fs");

describe("runTests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test.each([
        ["sum.test.js", true],
        ["math.test.js", true],
        ["index.js", false],
        ["utils.ts", false],
        ["demo.spec.js", false],
    ])(
        "file %s should %sbe required",
        (fileName, shouldRequire) => {
            fs.readdirSync.mockReturnValue([
                {
                    name: fileName,
                    isDirectory: () => false,
                    isFile: () => true,
                },
            ]);

            const execute = jest.fn();

            runTests("/root", execute);

            if (shouldRequire) {
                expect(execute).toHaveBeenCalledWith(
                    path.join("/root", fileName)
                );
            } else {
                expect(execute).not.toHaveBeenCalled();
            }
        }
    );

    test.each([
        ["node_modules"],
        ["lib"],
    ])("should skip folder %s", (folderName) => {
        fs.readdirSync.mockReturnValue([
            {
                name: folderName,
                isDirectory: () => true,
                isFile: () => false,
            },
        ]);

        const execute = jest.fn();

        runTests("/root", execute);

        expect(fs.readdirSync).toHaveBeenCalledTimes(1);
        expect(execute).not.toHaveBeenCalled();
    });
});