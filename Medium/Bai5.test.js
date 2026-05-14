const calculateTimeTwoArray = require('./Bai5');

describe('calculateTimeTwoArray', () => {
  test('multiplies corresponding elements of two arrays', () => {
    expect(calculateTimeTwoArray([1, 2, 3], [4, 5, 6])).toEqual([4, 10, 18]);
  });

  test('handles zero values', () => {
    expect(calculateTimeTwoArray([0, 2], [5, 0])).toEqual([0, 0]);
  });

  test('returns [] for empty arrays', () => {
    expect(calculateTimeTwoArray([], [])).toEqual([]);
  });
});