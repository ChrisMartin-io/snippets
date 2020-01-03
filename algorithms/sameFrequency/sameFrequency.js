// frequency counter solution

function sameFrequency(num1, num2) {
  // declare vars
  let arr1 = Array.from(String(num1), Number);
  let arr2 = Array.from(String(num2), Number);
  let counter = {};

  // loop through first array
  for (let i = 0; i < arr1.length; i++) {
    counter[arr1[i]] = counter[arr1[i]] + 1 || 1;
  }

  // loop through second array
  for (let i = 0; i < arr2.length; i++) {
    if (!counter[arr2[i]]) {
      return false;
    }
    counter[arr2[i]] = counter[arr2[i]] - 1;
  }
  return true;
}

module.exports = sameFrequency;
