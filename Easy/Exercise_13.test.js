const reverseArray = require('./Exercise_13');

describe('reverseArray', () => {
  test('reverses array with multiple elements', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('reverses array with one element', () => {
    expect(reverseArray([1])).toEqual([1]);
  });

  test('reverses empty array', () => {
    expect(reverseArray([])).toEqual([]);
  });

  test('reverses array with strings', () => {
    expect(reverseArray(['a', 'b'])).toEqual(['b', 'a']);
  });
});