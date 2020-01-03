// multiple pointer solution

function countUniqueValues(arr) {
  
  // declare two pointers and result vars
  let var1 = 0;
  let var2 = 1;
  var result = 0;

  // loop over array 
  for (let i = 0; i < arr.length; i++) {

    // compare pointers 
    if (arr[var1] === arr[var2]) {
      var2++;
    }
    
    // if pointers aren't equal, reset first pointer, continue counting up second pointer, count up result var
    else {
      var1 = var2;
      var2++;
      result++;
    }
  }
  return result;
}

module.exports = countUniqueValues;
