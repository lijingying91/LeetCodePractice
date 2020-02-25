/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let _nums = nums
  let sets = []
  let repeatArrs = []
  _nums.forEach(item => {
    if (sets.indexOf(item) === -1) {
      sets.push(item)
    } else {
      if (repeatArrs.indexOf(item) === -1) {
        repeatArrs.push(item)
      }
    }
  })
  return repeatArrs
};
// @lc code=end

