// frequency counter solution

function anagram(str1, str2) {
  let obj = {};

  // create frequency counter
  for (let letter of str1) {
    obj[letter] = obj[letter] + 1 || 1;
  }

  // count down frequency counter from second string
  for (let letter of str2) {
    if (!obj[letter]) {
      return false;
    }
    obj[letter] = obj[letter] - 1;
  }

  // check frequency counter object after comparison
  for (let count in obj) {
    if (obj[count] !== 0) {
      return false;
    }
  }
  return true;
}

module.exports = anagram;
