// Sliding window solution

function maxSubarraySum(arr, num) {

  // declare variables
  var tempSum = 0;
  var maxSum = 0;

  // initial loop to find first sum
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  // loop over rest of array, remove first end of subarray and add last end
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    // if larger than previous maxSum, set new maxSum
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

// naive solution
function maxSubarraySum2(arr, num) {
  var maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i + num]) {
      break;
    }

    var currSum = 0;
    for (let k = 0; k < num; k++) {
      currSum += arr[i + k];
    }

    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }
  return maxSum;
}

module.exports = maxSubarraySum;