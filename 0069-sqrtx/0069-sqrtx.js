/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) return x;

  let low = 1, high = x, mid, sqrt;
  
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    sqrt = mid * mid;

    if (sqrt === x) return mid;
    else if (sqrt < x) low = mid + 1;
    else high = mid - 1;
  }

  return high;
};
