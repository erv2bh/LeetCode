/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let step = 1;
  let x = rStart, y = cStart;
  let d = 0;

  const result = [[x, y]];

  while (result.length < rows * cols) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < step; j++) {
        x += directions[d][0];
        y += directions[d][1];
        if (x >= 0 && x < rows && y >= 0 && y < cols) {
          result.push([x, y]);
        }
      }
      d = (d + 1) % 4;
    }
    step++;
  }

  return result;
};
