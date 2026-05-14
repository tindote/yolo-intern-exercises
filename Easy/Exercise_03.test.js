const testNumber = require('./Exercise_03');

test('ca 2 so deu chan', () => {
  expect(testNumber(10, 20))
    .toBe("Cung chan!");
});

test('1 chan 1 le', () => {
  expect(testNumber(10, 21))
    .toBe("1 chan, 1 le");
});

test('ca 2 so deu le', () => {
  expect(testNumber(11, 21))
    .toBe("Cung le");
});

test('ca 2 so deu 0', () => {
  expect(testNumber(0, 0))
    .toBe("Cung chan!");
});

test('mot so 0', () => {
  expect(testNumber(0, 1))
    .toBe("1 chan, 1 le");
});