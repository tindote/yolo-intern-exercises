const getRandomValue = require('./Bai11');

describe('getRandomValue', () => {
  test('returns a number between 0 and a for positive input', () => {
    const value = getRandomValue(10);
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(10);
  });

  test('returns 0 for input 0', () => {
    expect(getRandomValue(0)).toBe(0);
  });

  test('returns NaN for non-numeric input', () => {
    expect(getRandomValue('a')).toBeNaN();
  });
});