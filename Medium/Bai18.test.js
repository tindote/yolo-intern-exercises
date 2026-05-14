const cutStringByStartAndLength = require('./Bai18');

describe('cutStringByStartAndLength', () => {
  test('cuts substring using start and length', () => {
    expect(cutStringByStartAndLength('Hello, World!', 1, 5)).toBe('ello,');
  });

  test('returns empty string when length is 0', () => {
    expect(cutStringByStartAndLength('Hello', 1, 0)).toBe('');
  });

  test('returns empty string for empty source string', () => {
    expect(cutStringByStartAndLength('', 0, 5)).toBe('');
  });
});