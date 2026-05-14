const { shuffleArray } = require('./Bai9');

describe('shuffleArray', () => {
  test('returns array with same elements but shuffled', () => {
    const input = [1, 2, 3, 4, 5];
    const output = shuffleArray(input);

    expect(output.sort()).toEqual(input.sort());
    expect(output).not.toBe(input);
  });

  test('returns empty array for empty input', () => {
    expect(shuffleArray([])).toEqual([]);
  });

  test('handles single element array', () => {
    expect(shuffleArray([1])).toEqual([1]);
  });
});