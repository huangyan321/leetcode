/**
 * [27] 移除元素
 *
 * @format
 * @lc app=leetcode.cn id=27 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let fast = 0, slow = 0;
  while (fast < nums.length) {
      if (nums[fast] !== val) {
          nums[slow] = nums[fast];
          slow++;
      }
      fast++;
  }
  return slow;
};
// @lc code=end

/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */
