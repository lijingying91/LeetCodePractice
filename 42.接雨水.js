/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  function cutUselessInTheSides(list = height) {
    let p = 0
    while (p < list.length - 1 && list[p] <= list[p + 1]) {
      p++
    }
    list = list.slice(p)
    p = list.length - 1
    while (p > 0 && list[p - 1] >= list[p]) {
      p--
    }
    list = list.slice(0, p + 1)
    return list
  }
  function calSum(list) {
    let max = Math.min(list[0], list[list.length - 1])
    let sum = 0
    for (let i = 0; i < list.length; ++i) {
      let delta = max - list[i]
      sum += delta > 0 ? delta : 0
    }
    return sum
  }
  function calculator(list = height, total = 0) {
    if (list.length < 3) {
      return total
    }
    list = cutUselessInTheSides(list)
    if (list.length < 3) {
      return total
    }

    let firstBiggerIndex = -1
    for (let i = 1; i < list.length; ++i) {
      if (list[i] >= list[0]) {
        firstBiggerIndex = i
        break
      }
    }
    if (firstBiggerIndex >= 0) {
      // 找到了
      let leftList = list.slice(0, firstBiggerIndex + 1)
      total += calSum(leftList)
      list = list.slice(firstBiggerIndex)
      return calculator(list, total)
    }
    // 从右往左找
    for (let i = list.length - 2; i >= 0; --i) {
      if (list[i] >= list[list.length - 1]) {
        firstBiggerIndex = i
        break
      }
    }
    if (firstBiggerIndex >= 0) {
      // 找到了
      let rightList = list.slice(firstBiggerIndex)
      total += calSum(rightList)
      list = list.slice(0, firstBiggerIndex + 1)
      return calculator(list, total)
    } else {
      return total
    }
  }
  return calculator()
}
// @lc code=end
