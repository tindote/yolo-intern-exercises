const countElements = require('./Bai14');

describe('countElements', () => {
  test('counts elements in first array not present in second', () => {
    expect(countElements([1, 2, 3, 4], [3, 4, 5, 6])).toBe(2);
  });

  test('returns length of first array when no elements match', () => {
    expect(countElements([1, 2], [3, 4])).toBe(2);
  });

  test('returns 0 for empty first array', () => {
    expect(countElements([], [1, 2])).toBe(0);
  });
});