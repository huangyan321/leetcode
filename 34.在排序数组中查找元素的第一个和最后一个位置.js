/**
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * @format
 * @lc app=leetcode.cn id=34 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function findLeftEdge(nums, target) {
    var left = 0,
      right = nums.length - 1;

    while (left <= right) {
      var mid = left + Math.floor((right - left) / 2);

      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    // 检查出界情况
    if (left >= nums.length || nums[left] != target) {
      return -1;
    }
    return left;
  }
  function findRightEdge(nums, target) {
    var left = 0,
      right = nums.length - 1;

    while (left <= right) {
      var mid = left + Math.floor((right - left) / 2);

      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        left = mid + 1;
      }
    }
    if (right < 0 || nums[right] != target) {
      return -1;
    }
    return right;
  }

  return [findLeftEdge(nums, target), findRightEdge(nums, target)];
};
// @lc code=end

/*
// @lcpr case=start
// [5,7,7,8,8,10]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,7,7,8,8,10]\n6\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */
