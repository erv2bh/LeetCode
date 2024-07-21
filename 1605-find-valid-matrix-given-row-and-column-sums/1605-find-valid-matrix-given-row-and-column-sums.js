/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
  const numRows = rowSum.length;
  const numCols = colSum.length;
  const matrix = Array.from({ length: numRows }, () => Array(numCols).fill(0));

  let i = 0, j = 0;
  while (i < numRows && j < numCols) {
    const minValue = Math.min(rowSum[i], colSum[j]);
    matrix[i][j] = minValue;
    rowSum[i] -= minValue;
    colSum[j] -= minValue;

    if (rowSum[i] === 0) {
      i++;
    }
    if (colSum[j] === 0) {
      j++;
    }
  }

  return matrix;
};
