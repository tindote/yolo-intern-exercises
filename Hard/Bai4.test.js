const { mergeSortedArraysDec } = require('./Bai4');

describe('mergeSortedArraysDec', () => {
  test('merges two sorted descending arrays', () => {
    expect(mergeSortedArraysDec([7, 5, 3], [6, 4, 2])).toEqual([7, 6, 5, 4, 3, 2]);
  });

  test('returns second array when first array is empty', () => {
    expect(mergeSortedArraysDec([], [3, 2, 1])).toEqual([3, 2, 1]);
  });

  test('returns first array when second array is empty', () => {
    expect(mergeSortedArraysDec([3, 2, 1], [])).toEqual([3, 2, 1]);
  });
});