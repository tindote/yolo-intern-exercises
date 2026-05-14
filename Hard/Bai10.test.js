const lastNonZeroDigit = require('./Bai10');

describe('lastNonZeroDigit', () => {
  test('returns last non-zero digit for 5!', () => {
    expect(lastNonZeroDigit(5)).toBe(2);
  });

  test('returns last non-zero digit for 10!', () => {
    expect(lastNonZeroDigit(10)).toBe(8);
  });

  test('returns last non-zero digit for 20!', () => {
    expect(lastNonZeroDigit(20)).toBe(4);
  });

  test('returns 1 for 0!', () => {
    expect(lastNonZeroDigit(0)).toBe(1);
  });

  test('returns 1 for 1!', () => {
    expect(lastNonZeroDigit(1)).toBe(1);
  });
});