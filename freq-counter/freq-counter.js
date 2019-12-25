function same(arr1, arr2) {
  var set = new Set();

  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i] * arr1[i]);
  }

  console.log('set is', set);

  for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
    if (!set.has(arr2[i])) {
      return false;
    }
  }
  return true;
}
