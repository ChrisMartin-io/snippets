const anagram = require('./anagram');

describe('anagram function', () => {

  test('it is a function', () => {
    expect(typeof anagram).toBe("function");
  });
  
  test('return correct boolean (false)', () => {
    expect(anagram('aaz', 'azz')).toEqual(false);
  });

  test('return expected boolean (false)', () => {
    expect(anagram('awesome', 'awesom')).toEqual(false);
  });

  test('return expected boolean (true)', () => {
    expect(anagram('texttwisttime', 'timetwisttext')).toEqual(true);
  });
});
