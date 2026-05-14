const calculateDiviseTwoArray = require('./Bai6');

describe('calculateDiviseTwoArray', () => {
  test('divides corresponding elements of two arrays', () => {
    expect(calculateDiviseTwoArray([8, 6], [2, 3])).toEqual([4, 2]);
  });

  test('returns Infinity for division by zero', () => {
    expect(calculateDiviseTwoArray([1], [0])).toEqual([Infinity]);
  });

  test('returns [] for empty arrays', () => {
    expect(calculateDiviseTwoArray([], [])).toEqual([]);
  });
});