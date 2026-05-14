const countEven = require('./Exercise_05');

describe('countEven', () => {
  test('counts odd numbers in mixed array', () => {
    expect(countEven([1, 2, 3, 4, 5])).toBe(3);
  });

  test('counts odd numbers in all even array', () => {
    expect(countEven([2, 4, 6])).toBe(0);
  });

  test('counts odd numbers in all odd array', () => {
    expect(countEven([1, 3, 5])).toBe(3);
  });

  test('returns 0 for empty array', () => {
    expect(countEven([])).toBe(0);
  });
});