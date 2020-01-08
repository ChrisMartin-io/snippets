var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reverse in place

function rev(arr) {
  var j = arr.length - 1;
  for (var i = 0; i < j; i++) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
  }
  return arr;
}

// reverse with 2nd variable

function rev2(arr) {
  let arr2 = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    arr2.push(arr.pop());
  }
  arr = arr2;
  return arr;
}
