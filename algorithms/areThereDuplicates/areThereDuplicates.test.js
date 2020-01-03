const areThereDuplicates = require('./areThereDuplicates');

describe('areThereDuplicates', () => {

  test('is it a function', () => {
    expect(typeof areThereDuplicates).toEqual('function');
  });

  test('return false', () => {
    expect(areThereDuplicates(1, 2, 3)).toEqual(false);
  });

  test('return true', () => {
    expect(areThereDuplicates(1, 2, 2)).toEqual(true);
  });

  test('return true', () => {
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toEqual(true);
  });
  
});