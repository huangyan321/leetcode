/**
 * [11] 盛最多水的容器
 *
 * @format
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var left = 0,
    right = height.length - 1;
  var max = 0;

  while (left < right) {
    max = Math.max(Math.min(height[left], height[right]) * (right - left), max);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max
};
// @lc code=end

/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */
