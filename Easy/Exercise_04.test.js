const countEven = require('./Exercise_04');

test('dem so chan trong mang', () => {

  const data = [1, 3, 6, 3, 7, 9, 8, 0, 11, 32, 43];

  expect(countEven(data)).toBe(4); 
});

test('mang khong co so chan', () => {

  const data = [1, 3, 5, 7, 9];

  expect(countEven(data)).toBe(0);
});

test('tat ca deu chan', () => {

  const data = [2, 4, 6, 8];

  expect(countEven(data)).toBe(4);
});

test('mang rong', () => {

  const data = [];

  expect(countEven(data)).toBe(0);
});