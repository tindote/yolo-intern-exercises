const displayFibonacci = require('./Bai16');

describe('displayFibonacci', () => {
  test('returns first five Fibonacci numbers', () => {
    expect(displayFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test('returns empty array for n = 0', () => {
    expect(displayFibonacci(0)).toEqual([]);
  });

  test('returns first Fibonacci number for n = 1', () => {
    expect(displayFibonacci(1)).toEqual([0]);
  });

  test('returns first two for n = 2', () => {
    expect(displayFibonacci(2)).toEqual([0, 1]);
  });
});