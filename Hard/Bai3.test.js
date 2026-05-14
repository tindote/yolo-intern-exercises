const { mergeSortedArraysAsc } = require('./Bai3');

describe('mergeSortedArraysAsc', () => {
  test('merges two sorted ascending arrays', () => {
    expect(mergeSortedArraysAsc([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('returns second array when first array is empty', () => {
    expect(mergeSortedArraysAsc([], [1, 2])).toEqual([1, 2]);
  });

  test('returns first array when second array is empty', () => {
    expect(mergeSortedArraysAsc([1, 2], [])).toEqual([1, 2]);
  });
});