const countUniqueValues = require('./countUniqueValues');

describe('countUniqueValues function', () => {

  test('it is a function', () => {
    expect(typeof countUniqueValues).toEqual('function');
  });

  test('to equal 2', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2);
  });

  test('to equal 2', () => {
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
  });

  test('to equal 0', () => {
    expect(countUniqueValues([])).toEqual(0);
  });

  test('to equal 4', () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toEqual(4);
  });
  
});
