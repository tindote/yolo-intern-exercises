const findIndex = require('./Exercise_14');

describe('findIndex', () => {
  test('finds index of existing value', () => {
    expect(findIndex([1, 2, 3], 2)).toBe(1);
  });

  test('finds index of first occurrence', () => {
    expect(findIndex([1, 2, 2, 3], 2)).toBe(1);
  });

  test('returns -1 for non-existing value', () => {
    expect(findIndex([1, 2, 3], 4)).toBe(-1);
  });

  test('returns -1 for empty array', () => {
    expect(findIndex([], 1)).toBe(-1);
  });
});