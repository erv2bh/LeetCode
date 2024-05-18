/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
  let moves = 0;

  function dfs(node) {
    if (node === null) return 0;

    const leftExcess = dfs(node.left);
    const rightExcess = dfs(node.right);

    const excess = node.val + leftExcess + rightExcess - 1;

    moves += Math.abs(excess);

    return excess;
  }

  dfs(root);

  return moves;
};
