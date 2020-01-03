const averagePair = require('./averagePair');

describe('averagePair function', () => {

  test('it is a function', () => {
    expect(typeof averagePair).toBe('function');
  });

  test('return true', () => {
    expect(averagePair([1, 2, 3], 2.5)).toEqual(true);
  });

  test('return true', () => {
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toEqual(true);
  });

  test('return false', () => {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toEqual(false);
  });

  test('return false', () => {
    expect(averagePair([], 4)).toEqual(false);
  });
});