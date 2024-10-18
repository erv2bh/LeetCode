/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  let maxOr = 0;

  for (let num of nums) {
    maxOr |= num;
  }

  let count = 0;
  const n = nums.length;

  for (let mask = 1; mask < (1 << n); mask++) {
    let currentOr = 0;

    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        currentOr |= nums[i];
      }
    }

    if (currentOr === maxOr) {
      count++;
    }
  }

  return count;
};