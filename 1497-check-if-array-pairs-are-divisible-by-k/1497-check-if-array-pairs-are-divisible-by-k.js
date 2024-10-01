/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  const remainderMap = new Array(k).fill(0);

  for (let num of arr) {
    let remainder = ((num % k) + k) % k;
    remainderMap[remainder]++;
  }

  for (let i = 1; i < k; i++) {
    if (remainderMap[i] !== remainderMap[k - i]) {
      return false;
    }
  }

  if (remainderMap[0] % 2 !== 0) {
    return false;
  }

  return true;
};