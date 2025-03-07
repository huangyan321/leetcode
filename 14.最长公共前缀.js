/**
 * [14] 最长公共前缀
 *
 * @format
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 2) return strs[0];
  let maxPrefix = '';
  for (let col = 0; col < strs[0].length; col++) {
    for (let row = 1; row < strs.length; row++) {
      const preCol = strs[row - 1][col];
      const curCol = strs[row][col];
      if (preCol !== curCol) {
        return maxPrefix;
      }
    }
    maxPrefix += strs[0][col];
  }
  return maxPrefix;
};
// @lc code=end

/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */
