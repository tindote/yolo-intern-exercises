const connectTwoArrays = require('./Bai2');

describe('connectTwoArrays', () => {
  test('concatenates two arrays of equal length', () => {
    expect(connectTwoArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('returns first array when second array is empty', () => {
    expect(connectTwoArrays([1, 2], [])).toEqual([1, 2]);
  });

  test('returns second array when first array is empty', () => {
    expect(connectTwoArrays([], [3, 4])).toEqual([3, 4]);
  });

  test('handles empty arrays for both inputs', () => {
    expect(connectTwoArrays([], [])).toEqual([]);
  });
});