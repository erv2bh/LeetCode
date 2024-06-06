/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let charCount = {};
    
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let length = 0;
  let oddFound = false;

  for (let count of Object.values(charCount)) {
    if (count % 2 === 0) {
      length += count;
    } else {
      length += count - 1;
      oddFound = true;
    }
  }

  if (oddFound) {
    length += 1;
  }

  return length;
};
