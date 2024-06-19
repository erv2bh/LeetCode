/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  function euclideanDistance(point) {
    return Math.sqrt(point[0] * point[0] + point[1] * point[1]);
  }

  points.sort((a, b) => euclideanDistance(a) - euclideanDistance(b));

  return points.slice(0, k);
};
