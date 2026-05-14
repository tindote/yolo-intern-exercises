const calculateSubTwoArray = require('./Bai4');

describe('calculateSubTwoArray', () => {
  test('subtracts second array from first element-wise', () => {
    expect(calculateSubTwoArray([5, 7], [2, 3])).toEqual([3, 4]);
  });

  test('handles negative values', () => {
    expect(calculateSubTwoArray([1, -1], [2, 3])).toEqual([-1, -4]);
  });

  test('returns [] for empty arrays', () => {
    expect(calculateSubTwoArray([], [])).toEqual([]);
  });
});