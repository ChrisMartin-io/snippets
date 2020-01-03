// multiple plinters solution

function areThereDuplicates() {
  // declare vars
  let var1 = 0;
  let var2 = 1;

  // loop through arguments
  for (let i = 0; i < arguments.length; i++) {

    if (arguments[var1] === arguments[var2]) {
      return true;
    } else if (var2 === arguments.length - 1) {
      var1 = var1 + 1;
      var2 = var1 + 1;
      i = var1;
    } else {
      var2++;
    }
  }
  return false;
}

module.exports = areThereDuplicates;