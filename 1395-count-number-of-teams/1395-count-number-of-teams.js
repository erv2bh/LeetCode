/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let count = 0;
  let n = rating.length;

  for (let j = 0; j < n; j++) {
    let leftSmaller = 0, leftLarger = 0;
    let rightSmaller = 0, rightLarger = 0;

    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) {
        leftSmaller++;
      } else if (rating[i] > rating[j]) {
        leftLarger++;
      }
    }

    for (let k = j + 1; k < n; k++) {
      if (rating[k] < rating[j]) {
        rightSmaller++;
      } else if (rating[k] > rating[j]) {
        rightLarger++;
      }
    }

    count += leftSmaller * rightLarger + leftLarger * rightSmaller;
  }

  return count;
};
