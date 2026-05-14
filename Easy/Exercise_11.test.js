const findMin = require('./Exercise_11');

describe('findMin', () => {
  test('finds min in array with positive numbers', () => {
    expect(findMin([1, 3, 2])).toBe(1);
  });

  test('finds min in array with negative numbers', () => {
    expect(findMin([-1, -3, -2])).toBe(-3);
  });

  test('finds min in single element array', () => {
    expect(findMin([5])).toBe(5);
  });

  test('returns null for empty array', () => {
    expect(findMin([])).toBe(null);
  });
});