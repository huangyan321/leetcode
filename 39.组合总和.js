/**
 * [39] 组合总和
 *
 * @format
 * @lc app=leetcode.cn id=39 lang=javascript
 * @lcpr version=30101
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const track = [];
  function backtrack(start, target, sum) {
    if (sum === target) {
      res.push([...track]);
      return;
    }
    if (sum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      sum += candidates[i];

      track.push(candidates[i]);

      backtrack(i, target, sum);

      sum -= candidates[i];

      track.pop();
    }
  }
  backtrack(0, target, 0);

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */
