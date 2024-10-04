/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
  const n = skill.length;
  if (n % 2 !== 0) return -1;

  skill.sort((a, b) => a - b);

  const target = skill[0] + skill[n - 1];
  let totalChemistry = 0;

  for (let i = 0; i < n / 2; i++) {
    const left = skill[i];
    const right = skill[n - 1 - i];

    if (left + right !== target) {
      return -1;
    }

    totalChemistry += left * right;  }

  return totalChemistry;
};