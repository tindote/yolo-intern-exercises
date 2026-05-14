const { mergeSortedArraysDecToAsc } = require('./Bai5');

describe('mergeSortedArraysDecToAsc', () => {
  test('merges two descending arrays into ascending order', () => {
    expect(mergeSortedArraysDecToAsc([7, 5, 3], [6, 4, 2])).toEqual([2, 3, 4, 5, 6, 7]);
  });

  test('returns second array ascending when first array is empty', () => {
    expect(mergeSortedArraysDecToAsc([], [3, 2, 1])).toEqual([1, 2, 3]);
  });

  test('returns first array ascending when second array is empty', () => {
    expect(mergeSortedArraysDecToAsc([3, 2, 1], [])).toEqual([1, 2, 3]);
  });
});