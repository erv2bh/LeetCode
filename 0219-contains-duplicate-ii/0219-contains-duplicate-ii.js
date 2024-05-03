/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    
    if (indexMap.has(num)) {
      const lastIndex = indexMap.get(num);
      
      if (i - lastIndex <= k) {
        return true;
      }
    }
    
    indexMap.set(num, i);
  }

  return false;  
};
