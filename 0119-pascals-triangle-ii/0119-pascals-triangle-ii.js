/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let row = [1];

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      row[j] = (row[j] || 0) + (row[j - 1] || 0);
    }
  }

  return row;
};
