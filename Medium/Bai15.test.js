const sumDigits = require('./Bai15');

describe('sumDigits', () => {
  test('calculates digit sum for a positive integer', () => {
    expect(sumDigits(123)).toBe(6);
  });

  test('returns 0 for zero', () => {
    expect(sumDigits(0)).toBe(0);
  });

  test('handles multi-digit numbers', () => {
    expect(sumDigits(999)).toBe(27);
  });

  test('ignores negative sign', () => {
    expect(sumDigits(-123)).toBe(6);
  });
});