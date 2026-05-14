const calculateFactorial = require('./Exercise_15');

describe('calculateFactorial', () => {
  test('calculates factorial of 5', () => {
    expect(calculateFactorial(5)).toBe(120);
  });

  test('calculates factorial of 0', () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  test('calculates factorial of 1', () => {
    expect(calculateFactorial(1)).toBe(1);
  });

  test('calculates factorial of 3', () => {
    expect(calculateFactorial(3)).toBe(6);
  });
});