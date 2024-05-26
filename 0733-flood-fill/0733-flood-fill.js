/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const rows = image.length;
  const cols = image[0].length;
  const startColor = image[sr][sc];

  if (startColor === color) return image;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== startColor) {
      return;
    }

    image[r][c] = color;

    dfs(r + 1, c); // Down
    dfs(r - 1, c); // Up
    dfs(r, c + 1); // Right
    dfs(r, c - 1); // Left
  }

  dfs(sr, sc);

  return image;
};
