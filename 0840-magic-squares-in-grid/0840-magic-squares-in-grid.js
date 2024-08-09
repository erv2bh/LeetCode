/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  function isMagicSquare(x, y) {
    let nums = new Set();
    let sums = new Set();

    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        if (grid[i][j] < 1 || grid[i][j] > 9 || nums.has(grid[i][j])) {
          return false;
        }
        nums.add(grid[i][j]);
      }
    }

    let sumDiagonal1 = 0, sumDiagonal2 = 0;
    for (let i = 0; i < 3; i++) {
      let sumRow = 0, sumCol = 0;
      for (let j = 0; j < 3; j++) {
        sumRow += grid[x + i][y + j];
        sumCol += grid[x + j][y + i];
      }
      sums.add(sumRow);
      sums.add(sumCol);
      sumDiagonal1 += grid[x + i][y + i];
      sumDiagonal2 += grid[x + i][y + 2 - i];
    }
    sums.add(sumDiagonal1);
    sums.add(sumDiagonal2);

    return sums.size === 1;
  }

  let count = 0;

  for (let i = 0; i <= grid.length - 3; i++) {
    for (let j = 0; j <= grid[0].length - 3; j++) {
      if (isMagicSquare(i, j)) {
        count++;
      }
    }
  }

  return count;
};