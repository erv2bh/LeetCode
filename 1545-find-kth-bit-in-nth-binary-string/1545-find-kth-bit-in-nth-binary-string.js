/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  function lengthOfSn(n) {
      return (1 << n) - 1;
  }

  function findKthBitRecursive(n, k) {
    if (n === 1) {
      return '0';
    }

    const mid = lengthOfSn(n - 1) + 1;

    if (k === mid) {
      return '1';
    } else if (k < mid) {
      return findKthBitRecursive(n - 1, k);
    } else {
      const mirroredK = mid * 2 - k;
      const bit = findKthBitRecursive(n - 1, mirroredK);

      return bit === '0' ? '1' : '0';
    }
  }

  return findKthBitRecursive(n, k);
};