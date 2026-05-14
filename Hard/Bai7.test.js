const { moneyExchange } = require('./Bai7');

describe('moneyExchange', () => {
  test('breaks money into the correct bill denominations', () => {
    const result = moneyExchange(63000);
    expect(result.totalBills).toBe(4);
    expect(result.result).toEqual([
      { bill: 50000, quantity: 1 },
      { bill: 10000, quantity: 1 },
      { bill: 2000, quantity: 1 },
      { bill: 1000, quantity: 1 }
    ]);
  });

  test('returns empty result for zero money', () => {
    expect(moneyExchange(0)).toEqual({ money: 0, totalBills: 0, result: [] });
  });

});