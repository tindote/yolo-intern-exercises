const swap3Number = require('./Exercise_01');

describe('swap3Number', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('swaps 1,2,3 to 2,3,1', () => {
    swap3Number(1, 2, 3);
    expect(consoleSpy).toHaveBeenCalledWith('2, 3, 1');
  });

  test('swaps with zeros', () => {
    swap3Number(0, 1, 2);
    expect(consoleSpy).toHaveBeenCalledWith('1, 2, 0');
  });

  test('swaps with negative numbers', () => {
    swap3Number(-1, 0, 1);
    expect(consoleSpy).toHaveBeenCalledWith('0, 1, -1');
  });
});