const subArray = require('./Bai7');

describe('subArray', () => {
  test('returns a slice of the array from start to end', () => {
    expect(subArray([1, 2, 3, 4], 1, 3)).toEqual([2, 3, 4]);
  });

  test('returns single element when start equals end', () => {
    expect(subArray([1, 2, 3], 2, 2)).toEqual([3]);
  });

  test('returns first element when start is zero and end is zero', () => {
    expect(subArray([1, 2, 3], 0, 0)).toEqual([1]);
  });

  test('returns empty array when start > end', () => {
    expect(subArray([1, 2, 3], 2, 1)).toEqual([]);
  });

  test('returns empty array for out of bounds start', () => {
    expect(subArray([1, 2, 3], 5, 6)).toEqual([]);
  });
});