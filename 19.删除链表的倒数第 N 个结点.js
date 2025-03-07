/**
 * [19] 删除链表的倒数第 N 个结点
 *
 * @format
 * @lc app=leetcode.cn id=19 lang=javascript
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(-1);
  dummy.next = head;
  function search(head) {
    if (!head) return;

    search(head.next);

    n--;

    if (n === -1) {
      head.next = head.next.next;
    }
  }
  search(dummy);
  return dummy.next;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */
