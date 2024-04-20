/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLen = 0;
  const charMap = new Map();
  let start = 0;

  for (let i = 0; i < s.length; i++) {
      if (charMap.has(s[i]) && charMap.get(s[i]) >= start) {
          start = charMap.get(s[i]) + 1;
      }
      charMap.set(s[i], i);
      maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
};
