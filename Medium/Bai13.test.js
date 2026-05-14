const calculateHotelCost = require('./Bai13');

describe('calculateHotelCost', () => {
  test('calculates cost for same-day stay under 2 hours', () => {
    expect(calculateHotelCost(8, 10)).toBe(140);
  });

  test('calculates cost for same-day stay longer than 2 hours', () => {
    expect(calculateHotelCost(8, 20)).toBe(640);
  });

  test('returns 160 when checkout is earlier or equal and checkout is <= 8', () => {
    expect(calculateHotelCost(10, 8)).toBe(160);
  });

  test('calculates early checkout cost when checkout is earlier and > 8', () => {
    expect(calculateHotelCost(20, 12)).toBe(320);
  });});