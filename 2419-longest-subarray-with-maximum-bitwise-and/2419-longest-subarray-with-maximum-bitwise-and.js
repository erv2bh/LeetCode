/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let maxVal = Math.max(...nums);
    
  let longest = 0;
  let currentLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxVal) {
      currentLength++;
    } else {
      longest = Math.max(longest, currentLength);
      currentLength = 0;
    }
  }

  longest = Math.max(longest, currentLength);

  return longest;
};
