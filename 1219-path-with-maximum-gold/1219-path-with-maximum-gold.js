/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let maxGold = 0;

  function dfs(x, y, currentGold, visited) {
    currentGold += grid[x][y];
    maxGold = Math.max(maxGold, currentGold);

    visited[x][y] = true;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let [dx, dy] of directions) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] > 0 && !visited[nx][ny]) {
        dfs(nx, ny, currentGold, visited);
      }
    }

    visited[x][y] = false;
  }

  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        dfs(i, j, 0, visited);
      }
    }
  }

  return maxGold;
};
