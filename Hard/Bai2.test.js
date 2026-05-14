const getRandomNumber = require('./Bai2');

describe('getRandomNumber', () => {
  test('returns a number between min and max', () => {
    const value = getRandomNumber(5, 10);
    expect(value).toBeGreaterThanOrEqual(5);
    expect(value).toBeLessThan(10);
  });

  test('swaps min and max when min is larger', () => {
    const value = getRandomNumber(10, 5);
    expect(value).toBeGreaterThanOrEqual(5);
    expect(value).toBeLessThan(10);
  });

  test('returns the exact value when min and max are equal', () => {
    expect(getRandomNumber(7, 7)).toBe(7);
  });

  test('returns values within negative range', () => {
    const value = getRandomNumber(-10, -5);
    expect(value).toBeGreaterThanOrEqual(-10);
    expect(value).toBeLessThan(-5);
  });

  test('returns values in range across multiple calls', () => {
    for (let i = 0; i < 20; i++) {
      const value = getRandomNumber(-2, 2);
      expect(value).toBeGreaterThanOrEqual(-2);
      expect(value).toBeLessThan(2);
    }
  });
});