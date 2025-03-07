/**
 * [26] 删除有序数组中的重复项
 *
 * @format
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  var slow = 0,
    fast = 1;
  while (fast < nums.length) {
    if (nums[fast] === nums[slow]) {
    } else {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */
