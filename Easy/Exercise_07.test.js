const sumOdd = require('./Exercise_07');

describe('sumOdd', () => {
  test('sums odd numbers in mixed array', () => {
    expect(sumOdd([1, 2, 3, 4, 5])).toBe(9);
  });

  test('sums all odd numbers', () => {
    expect(sumOdd([1, 3, 5])).toBe(9);
  });

  test('sums no odd numbers', () => {
    expect(sumOdd([2, 4, 6])).toBe(0);
  });

  test('returns 0 for empty array', () => {
    expect(sumOdd([])).toBe(0);
  });
});