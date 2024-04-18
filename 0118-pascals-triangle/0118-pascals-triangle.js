/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const triangle = [];
  
  for (let row = 0; row < numRows; row++) {
    const currentRow = [1];

    for (let col = 1; col < row; col++) {
      const aboveLeft = triangle[row - 1][col - 1];
      const aboveRight = triangle[row - 1][col];

      currentRow.push(aboveLeft + aboveRight);
    }

    if (row > 0) {
      currentRow.push(1);
    }
    
    triangle.push(currentRow);
  }

  return triangle;
};
