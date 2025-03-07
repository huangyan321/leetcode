/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30100
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var len = s.length;
  if (len < 2) return len;
  var slow = 0, fast = 0, max = 0, c = new Map();
  while (fast < len) {
      while (c.get(s[fast]) === undefined && fast < len) {
          c.set(s[fast], fast);
          max = Math.max(fast - slow + 1, max)
          fast++
      }
      while (slow <= c.get(s[fast])) {
          c.delete(s[slow]);
          slow++;
      }
      c.set(s[fast], fast);
      fast++;
  }
  return max
};
// @lc code=end



/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */

