/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var prevHead = new ListNode(-1);
  var prevNode = prevHead;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val ){
      prevNode.next = l1
      l1 = l1.next
    } else {
      prevNode.next = l2
      l2 = l2.next
    }
    prevNode = prevNode.next
  }
  prevNode.next = l1 ? l1 : l2
  return prevHead.next
};
// @lc code=end

