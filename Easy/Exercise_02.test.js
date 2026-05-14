const calculatePow = require('./Exercise_02');

test('2 mu 3 = 8', () => {
  expect(calculatePow(2, 3)).toBe(8);
});

test('5 mu 2 = 25', () => {
  expect(calculatePow(5, 2)).toBe(25);
});

test('10 mu 0 = 1', () => {
  expect(calculatePow(10, 0)).toBe(1);
});

test('2 mu -1 = 0.5', () => {
  expect(calculatePow(2, -1)).toBe(0.5);
});

test('0 mu 5 = 0', () => {
  expect(calculatePow(0, 5)).toBe(0);
});

test('0 mu 0 = 1', () => {
  expect(calculatePow(0, 0)).toBe(1);
});