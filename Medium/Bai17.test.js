const cutString = require('./Bai17');

describe('cutString', () => {
  test('cuts substring from start to end', () => {
    expect(cutString('Hello, World!', 0, 5)).toBe('Hello');
  });

  test('returns empty string when start equals end', () => {
    expect(cutString('Hello', 2, 2)).toBe('');
  });

  test('returns empty string for empty source string', () => {
    expect(cutString('', 0, 5)).toBe('');
  });

  test('returns substring when end > length', () => {
    expect(cutString('Hi', 0, 10)).toBe('Hi');
  });
});