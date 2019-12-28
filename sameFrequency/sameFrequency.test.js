const sameFrequency = require('./sameFrequency');

describe('sameFrequency', () => {

  test('is it a function', () => {
    expect(typeof sameFrequency).toBe('function');
  });

  test('should return true', () => {
    expect(sameFrequency(182, 281)).toEqual(true);
  });

  test('should return false', () => {
    expect(sameFrequency(34, 14)).toEqual(false);
  });

  test('should return true', () => {
    expect(sameFrequency(3589578, 5879385)).toEqual(true);
  });

  test('should =return false', () => {
    expect(sameFrequency(22, 222)).toEqual(false);
  });
});