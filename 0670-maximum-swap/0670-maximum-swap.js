/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const digits = num.toString().split('');
  const n = digits.length;

  const last = Array(10).fill(-1);

  for (let i = 0; i < n; i++) {
    last[digits[i]] = i;
  }

  for (let i = 0; i < n; i++) {
    for (let d = 9; d > digits[i]; d--) {
      if (last[d] > i) {
        [digits[i], digits[last[d]]] = [digits[last[d]], digits[i]];

        return parseInt(digits.join(''), 10);
      }
    }
  }

  return num;
};