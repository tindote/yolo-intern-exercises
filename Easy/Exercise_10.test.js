const findMax = require('./Exercise_10');

describe('findMax', () => {
  test('finds max in array with positive numbers', () => {
    expect(findMax([1, 3, 2])).toBe(3);
  });

  test('finds max in array with negative numbers', () => {
    expect(findMax([-1, -3, -2])).toBe(-1);
  });

  test('finds max in single element array', () => {
    expect(findMax([5])).toBe(5);
  });

  test('returns null for empty array', () => {
    expect(findMax([])).toBe(null);
  });
});