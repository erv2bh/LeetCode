/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
  function sumDigits(str) {
    return str.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }

  while (s.length > k) {
    let newS = "";
    
    for (let i = 0; i < s.length; i += k) {
      const part = s.substring(i, i + k);

      newS += sumDigits(part).toString();
    }
    
    s = newS;
  }

  return s;
};
