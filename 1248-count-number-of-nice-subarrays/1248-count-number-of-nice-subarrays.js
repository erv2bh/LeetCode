/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  const oddOrEven = nums.map(num => num % 2);
    
  let count = 0;
  let prefixSum = 0;
  const prefixCounts = {0: 1};

  for (let i = 0; i < oddOrEven.length; i++) {
    prefixSum += oddOrEven[i];

    if (prefixCounts[prefixSum - k] !== undefined) {
      count += prefixCounts[prefixSum - k];
    }

    if (prefixCounts[prefixSum] === undefined) {
      prefixCounts[prefixSum] = 1;
    } else {
      prefixCounts[prefixSum]++;
    }
  }

  return count;
};
