/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let carry = 0;
  const result = [];
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    
    if (i >= 0) {
        sum += a.charAt(i) - "0";
        i--;
    }
    
    if (j >= 0) {
        sum += b.charAt(j) - "0";
        j--;
    }
    
    carry = Math.floor(sum / 2);
    
    result.push(sum % 2);
  }

  return result.reverse().join("");
};
