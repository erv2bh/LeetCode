/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  const indexedScores = score.map((s, i) => [s, i]);

  indexedScores.sort((a, b) => b[0] - a[0]);

  const result = new Array(score.length);

  for (let i = 0; i < indexedScores.length; i++) {
    if (i === 0) {
        result[indexedScores[i][1]] = "Gold Medal";
    } else if (i === 1) {
        result[indexedScores[i][1]] = "Silver Medal";
    } else if (i === 2) {
        result[indexedScores[i][1]] = "Bronze Medal";
    } else {
        result[indexedScores[i][1]] = String(i + 1);
    }
  }

  return result; 
};
