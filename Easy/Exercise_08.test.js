const checkPrime = require('./Exercise_08');

describe('checkPrime', () => {
  test('returns "co" for prime number 2', () => {
    expect(checkPrime(2)).toBe('co');
  });

  test('returns "co" for prime number 13', () => {
    expect(checkPrime(13)).toBe('co');
  });

  test('returns "khong" for non-prime number 4', () => {
    expect(checkPrime(4)).toBe('khong');
  });

  test('returns "co" for 1', () => {
    expect(checkPrime(1)).toBe('co');
  });

  test('returns "co" for 0', () => {
    expect(checkPrime(0)).toBe('co');
  });

  test('returns "co" for negative number -5', () => {
    expect(checkPrime(-5)).toBe('co');
  });
});