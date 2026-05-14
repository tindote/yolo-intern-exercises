const { convertMoneyFromNumberToString } = require('./Bai6');

describe('convertMoneyFromNumberToString', () => {
  test('converts zero to Không đồng', () => {
    expect(convertMoneyFromNumberToString(0)).toBe('Không đồng');
  });

  test('converts positive amount to Vietnamese text', () => {
    expect(convertMoneyFromNumberToString(1000)).toBe('một nghìn đồng');
  });

  test('returns error message for negative amount', () => {
    expect(convertMoneyFromNumberToString(-1)).toBe('Số tiền không thể âm');
  });

  test('handles large amounts', () => {
    expect(convertMoneyFromNumberToString(1000000)).toBe('một triệu đồng');
  });
});