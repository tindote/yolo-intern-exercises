const { reverseCharInWords } = require('./Bai1');

describe('reverseCharInWords', () => {
  test('reverses characters in each word', () => {
    expect(reverseCharInWords('hello world')).toBe('olleh dlrow');
  });

  test('preserves single-word input', () => {
    expect(reverseCharInWords('abc')).toBe('cba');
  });

  test('returns empty string for empty input', () => {
    expect(reverseCharInWords('')).toBe('');
  });
});