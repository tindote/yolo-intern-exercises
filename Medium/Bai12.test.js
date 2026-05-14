const getRandomValue = require('./Bai12');

describe('getRandomValue', () => {
  test('returns a number between -a and a for positive input', () => {
    const value = getRandomValue(10);
    expect(value).toBeGreaterThanOrEqual(-10);
    expect(value).toBeLessThan(10);
  });

  test('returns 0 for input 0', () => {
    expect(getRandomValue(0)).toBe(0);
  });
});