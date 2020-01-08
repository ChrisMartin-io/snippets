// multiple pointers

function isSubsequence(str1, str2) {
  // set vars
  var var1 = 0;
  var var2 = 0;

  // loop through first string
  for (let i = 0; i < str1.length; i++) {
    console.log('var1', var1);
    console.log('var2', var2);
    if (!str2[var2]) {
      return false;
    } else if (str1[var1] === str2[var2]) {
      var1++;
      var2++;
    } else {
      var2++;
      i--;
    }
  }
  return true;
}
