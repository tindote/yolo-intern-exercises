const sortArrayByString = require('./Bai1');

describe('sortArrayByString', () => {
  test('sorts array ascending when string is Tang', () => {
    expect(sortArrayByString([5, 2, 9, 1], 'Tang')).toEqual([1, 2, 5, 9]);
  });

  test('sorts array descending when string is Giam', () => {
    expect(sortArrayByString([5, 2, 9, 1], 'Giam')).toEqual([9, 5, 2, 1]);
  });

  test('returns [] for empty array with Tang', () => {
    expect(sortArrayByString([], 'Tang')).toEqual([]);
  });

  test('returns undefined for invalid sort string', () => {
    expect(sortArrayByString([1, 2, 3], 'Other')).toBeUndefined();
  });
});