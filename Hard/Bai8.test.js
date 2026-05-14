const { countStrAInStrB } = require('./Bai8');

describe('countStrAInStrB', () => {
  test('counts target occurrences in source string', () => {
    expect(countStrAInStrB('tin', 'tinbontinbonten')).toBe(2);
  });

  test('returns 0 for empty target', () => {
    expect(countStrAInStrB('', 'abc')).toBe(0);
  });

  test('returns 0 for invalid input types', () => {
    expect(countStrAInStrB(1, ['a'])).toBe(0);
  });

  test('counts overlapping occurrences', () => {
    expect(countStrAInStrB('aa', 'aaa')).toBe(1);
  });
});