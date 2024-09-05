/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  const m = rolls.length;
  const totalRolls = n + m;

  const totalSum = totalRolls * mean;

  const currentSum = rolls.reduce((acc, val) => acc + val, 0);

  const missingSum = totalSum - currentSum;

  if (missingSum < n || missingSum > 6 * n) {
    return [];
  }

  const result = Array(n).fill(1);
  let remainingSum = missingSum - n;

  for (let i = 0; i < n && remainingSum > 0; i++) {
    const add = Math.min(remainingSum, 5); // You can add at most 5 to each roll
    result[i] += add;
    remainingSum -= add;
  }

  return result;
};
