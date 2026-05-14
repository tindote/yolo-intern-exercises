const findStringInString = require('./Bai8');

describe('findStringInString', () => {
  test('returns index of substring when found', () => {
    expect(findStringInString('Hello world', 'world')).toBe(6);
  });

  test('returns false when substring is not found', () => {
    expect(findStringInString('Hello world', 'abc')).toBe(false);
  });

  test('returns false for empty source string', () => {
    expect(findStringInString('', 'a')).toBe(false);
  });
});