/**
 * [22] 括号生成
 *
 * @format
 * @lc app=leetcode.cn id=22 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  function backTrack(left, right, track, res) {
    if (right < left) return;

    if (right < 0 || left < 0) return;

    if (right === 0 && left === 0) {
      res.push(track.join(''));
    }

    track.push('(');

    backTrack(left - 1, right, track, res);

    track.pop();

    track.push(')');

    backTrack(left, right - 1, track, res);

    track.pop();
  }
  const track = [];

  const res = [];

  backTrack(n, n, track, res);

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
