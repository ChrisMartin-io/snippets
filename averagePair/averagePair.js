// write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the averagfe of the pair equals the target average. There may be more than one pair that matches the average target.

// multiple pointers solution

function averagePair(arr, avg) {
  // declare vars
  let var1 = 0;
  let var2 = 1;

  // loop through array
  for (let i = 0; i < arr.length; i++) {
    if ((arr[var1] + arr[var2]) / 2 === avg) {
      return true;
    }

    // if reached end of loop with var2, move first pointer forward
    else if (var2 === arr.length - 1) {
      var1++;
      var2 = var1 + 1;
      i = var1;
    }

    // move second pointer
    else {
      var2++;
    }
  }
  return false;
}

module.exports = averagePair;
