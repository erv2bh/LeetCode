/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const queue = [];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c]);
      } else {
        mat[r][c] = Infinity;
      }
    }
  }

  while (queue.length) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && mat[nr][nc] > mat[r][c] + 1) {
        mat[nr][nc] = mat[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  return mat;
};
