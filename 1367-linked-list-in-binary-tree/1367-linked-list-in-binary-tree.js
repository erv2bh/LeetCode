/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
  function dfs(treeNode, listNode) {
    if (listNode === null) return true;
    if (treeNode === null) return false;
    if (treeNode.val === listNode.val) {
      return dfs(treeNode.left, listNode.next) || dfs(treeNode.right, listNode. next);
    }
    
    return false;
  }

  function traverse(treeNode) {
    if (treeNode === null) return false;
    if (dfs(treeNode, head)) return true;

    return traverse(treeNode.left) || traverse(treeNode.right);
  }

  return traverse(root);
};
