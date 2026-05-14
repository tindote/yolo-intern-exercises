const countElements = require('./Bai9');

describe('countElements', () => {
  test('counts common elements between two arrays', () => {
    expect(countElements([1, 2, 3, 4], [3, 4, 5, 6])).toBe(2);
  });

  test('returns 0 when there are no common elements', () => {
    expect(countElements([1, 2], [3, 4])).toBe(0);
  });

  test('handles empty first array', () => {
    expect(countElements([], [1, 2])).toBe(0);
  });
});