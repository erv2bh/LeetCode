/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
  const totalOnes = nums.reduce((acc, num) => acc + num, 0);
  
  if (totalOnes === 0) return 0;

  const n = nums.length;
  
  let currentOnes = 0;

  for (let i = 0; i < totalOnes; i++) {
    if (nums[i] === 1) currentOnes++;
  }

  let maxOnesInWindow = currentOnes;

  for (let i = totalOnes; i < n + totalOnes; i++) {
    if (nums[i % n] === 1) currentOnes++;
    if (nums[(i - totalOnes) % n] === 1) currentOnes--;
    maxOnesInWindow = Math.max(maxOnesInWindow, currentOnes);
  }

  return totalOnes - maxOnesInWindow;
};
