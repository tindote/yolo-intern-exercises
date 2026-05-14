const sumEven = require('./Exercise_06');

describe('sumEven', () => {
  test('sums even numbers in mixed array', () => {
    expect(sumEven([1, 2, 3, 4, 5])).toBe(6);
  });

  test('sums all even numbers', () => {
    expect(sumEven([2, 4, 6])).toBe(12);
  });

  test('sums no even numbers', () => {
    expect(sumEven([1, 3, 5])).toBe(0);
  });

  test('returns 0 for empty array', () => {
    expect(sumEven([])).toBe(0);
  });
});