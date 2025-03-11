/**
 * [33] 搜索旋转排序数组
 *
 * @format
 * @lc app=leetcode.cn id=33 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var min = 0,
    n = nums.length;
  for (var l = 1, r = n - 1; l <= r; ) {
    var m = l + (Math.floor((r - l) / 2));
    if (nums[0] < nums[m]) l = m + 1;
    else {
      r = m - 1;
      min = m;
    }
  }
  for (var l = min, r = l + n - 1; l <= r; ) {
    var m = l + (Math.floor((r - l) / 2)),
      i = m % n;
    if (target < nums[i]) r = m - 1;
    else if (target > nums[i]) l = m + 1;
    else return i;
  }
  return -1;
};
// @lc code=end

/*
// @lcpr case=start
// [4,5,6,7,0,1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [4,5,6,7,0,1,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */
