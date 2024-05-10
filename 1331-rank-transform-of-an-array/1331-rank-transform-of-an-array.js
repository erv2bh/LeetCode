/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);

  const rankMap = new Map();
  let rank = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    if (!rankMap.has(sortedArr[i])) {
      rankMap.set(sortedArr[i], rank);
      rank++;
    }
  }

  return arr.map(element => rankMap.get(element));
};
