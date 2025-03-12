/**
 * [46] 全排列
 *
 * @format
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30101
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const track = [];

  const used = new Array(nums.length).fill(false);

  function backtrack(track, nums, used) {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i] === true) {
        continue;
      }

      track.push(nums[i]);

      used[i] = true;

      backtrack(track, nums, used);

      used[i] = false;

      track.pop();
    }
  }
  backtrack(track, nums, used);

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
