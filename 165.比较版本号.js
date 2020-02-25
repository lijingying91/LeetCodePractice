/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let result
  let _version1 = version1.split('.').map(item => parseInt(item))
  let _version2 = version2.split('.').map(item => parseInt(item))
  let max = Math.max(_version1.length, _version2.length)
  for (let i = 0; i < max; i++) {
    let _item1 = _version1[i] || 0
    let _item2 = _version2[i] || 0
    if (_item1 > _item2) {
      result = 1
      return result
    }
    else if (_item1 < _item2) {
      result = -1
      return result
    }
    else {
      result = 0
    }
  }
  return result
};
// @lc code=end

