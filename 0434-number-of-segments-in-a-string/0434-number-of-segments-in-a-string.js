/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let count = 0;
  let inSegment = false;

  for (const char of s) {
    if (char !== " " && !inSegment) {
      inSegment = true;
      count++;
    }
    else if (char === " " && inSegment) {
      inSegment = false;
    }
  }

  return count;
}
