const maxSubArraySum = require('./maxSubArraySum');

describe('maxSubarraySum function', () => {

  test('it is a function', () => {
    expect(typeof maxSubArraySum).toEqual('function');
  });

  test('should equal 10', () => {
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10);
  });

  test('should equal 17', () => {
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toEqual(17);
  });

  test('should equal 6', () => {
    expect(maxSubArraySum([4, 2, 1, 6], 1)).toEqual(6);
  });

  test('should equal 13', () => {
    expect(maxSubArraySum([4, 2, 1, 6, 2], 4)).toEqual(13);
  });
  
});