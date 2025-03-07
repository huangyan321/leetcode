/**
 * [2] 两数相加
 *
 * @format
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var ahead = new ListNode(-1);
  var newNodeProxy = ahead;
  var hasCarry = false;
  var l1Proxy = l1,
    l2Proxy = l2;
  while (l1Proxy || l2Proxy) {
    var sum = (l1Proxy?.val || 0) + (l2Proxy?.val || 0);
    newNodeProxy.next = new ListNode(sum)
    newNodeProxy = newNodeProxy.next;
    l1Proxy = l1Proxy?.next;
    l2Proxy = l2Proxy?.next;
  }
  newNodeProxy = ahead.next;
  while (newNodeProxy) {
    if (newNodeProxy.val >= 10) {
      var carry = Math.floor(newNodeProxy.val / 10);
      var res = newNodeProxy.val % 10;
      if (!newNodeProxy.next && carry > 0) {
        newNodeProxy.next = new ListNode(carry);
      } else if (newNodeProxy.next) {
        newNodeProxy.next.val += carry;
      }
      newNodeProxy.val = res;
    }
    newNodeProxy = newNodeProxy.next;
  }

  return ahead.next;
};
// @lc code=end

/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */
