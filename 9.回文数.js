/*
 * @lc app=leetcode.cn id=9 lang=javascript
 * @lcpr version=30100
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false
  var str = x.toString()
  var left = 0, right = str.length - 1
  while(left <= right) {

    if(str[left] !== str[right]) {
      return false
    }


    left++
    right--
  }
  return true
};
// @lc code=end



/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */

