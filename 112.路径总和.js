/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  let result = false
  let getAll = (root, all) => {
    let { left, right, val} = root
    if (left === null && right === null) {
      if (all + val === sum) {
        result = true
        return
      }
    } else {
      all += val
      left && getAll(left, all)
      right && getAll(right, all)
    }
  }
  if (root) {
    getAll(root, 0)
  } else {
    result = false
  }
  return result
};
// @lc code=end

