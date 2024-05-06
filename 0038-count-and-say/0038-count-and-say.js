/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return "1"; // Base case
    
  const prevSeq = countAndSay(n - 1);

  let result = "";
  let count = 1;

  for (let i = 0; i < prevSeq.length; i++) {
    if (prevSeq[i] === prevSeq[i + 1]) {
      count++;
    } else {
      result += count + prevSeq[i];
      count = 1;
    }
  }

  return result; 
};