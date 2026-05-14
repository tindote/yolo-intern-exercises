const calculateSumTwoArray = require('./Bai3');

describe('calculateSumTwoArray', () => {
  test('adds corresponding elements of two arrays', () => {
    expect(calculateSumTwoArray([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
  });

  test('works with negative numbers', () => {
    expect(calculateSumTwoArray([-1, 0], [1, 2])).toEqual([0, 2]);
  });

  test('returns [] for empty arrays', () => {
    expect(calculateSumTwoArray([], [])).toEqual([]);
  });
});