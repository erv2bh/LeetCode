/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  const remainderNeeded = totalSum % p;

  if (remainderNeeded === 0) return 0;

  const prefixMap = new Map();
  prefixMap.set(0, -1);
  let prefixSum = 0;
  let minLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
    prefixSum = (prefixSum + nums[i]) % p;
    let remainder = (prefixSum - remainderNeeded + p) % p;

    if (prefixMap.has(remainder)) {
      minLength = Math.min(minLength, i - prefixMap.get(remainder));
    }

    prefixMap.set(prefixSum, i);
  }

  return minLength === nums.length ? -1 : minLength;
};
