const countDifferentElements = require('./Bai10');

describe('countDifferentElements', () => {
  test('counts elements in first array not found in second', () => {
    expect(countDifferentElements([1, 2, 3, 4], [3, 4, 5, 6])).toBe(2);
  });

  test('returns length of first array when no elements match', () => {
    expect(countDifferentElements([1, 2], [3, 4])).toBe(2);
  });

  test('returns 0 when first array is empty', () => {
    expect(countDifferentElements([], [1, 2])).toBe(0);
  });
});