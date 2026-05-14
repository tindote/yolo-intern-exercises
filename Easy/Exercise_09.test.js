const getRemainder = require('./Exercise_09');

describe('getRemainder', () => {
  test('calculates remainder for positive numbers', () => {
    expect(getRemainder(10, 3)).toBe(1);
  });

  test('calculates remainder for negative dividend', () => {
    expect(getRemainder(-10, 3)).toBe(-1); 
  });

  test('returns error for division by zero', () => {
    expect(getRemainder(10, 0)).toBe('Khong the chia cho 0');
  });

  test('calculates remainder when result between -1 and 1', () => {
    expect(getRemainder(0.5, 2)).toBe(0.5);
  });
});