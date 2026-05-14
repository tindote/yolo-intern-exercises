const findAverage = require('./Exercise_12');

describe('findAverage', () => {
  test('calculates average of positive numbers', () => {
    expect(findAverage([1, 2, 3])).toBe(2);
  });

  test('calculates average of mixed numbers', () => {
    expect(findAverage([1, -1, 0])).toBe(0);
  });

  test('calculates average of single element', () => {
    expect(findAverage([5])).toBe(5);
  });

  test('returns 0 for empty array', () => {
    expect(findAverage([])).toBe(0);
  });
});