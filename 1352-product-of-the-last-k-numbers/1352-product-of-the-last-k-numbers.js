
var ProductOfNumbers = function() {
  this.nums = [];
  this.prefixProduct = [1];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  if (num === 0) {
    this.nums = [];
    this.prefixProduct = [1];
  } else {
    this.nums.push(num);
    
    const lastProduct = this.prefixProduct[this.prefixProduct.length - 1];
    this.prefixProduct.push(lastProduct * num);
  }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
  const n = this.prefixProduct.length;
  
  if (k >= n) {
    return 0;
  }
    
  return this.prefixProduct[n - 1] / this.prefixProduct[n - 1 - k];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */