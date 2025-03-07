/**
 * [13] 罗马数字转整数
 *
 * @format
 * @lc app=leetcode.cn id=13 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let i = 0;
  let num = 0;
  while (i < s.length) {
    const eatOne = s.slice(i, i + 1);
    const eatTwo = s.slice(i, i + 2);

    if (map[eatTwo]) {
      num += map[eatTwo];
      i += 2;
      continue;
    }

    if (map[eatOne]) {
      num += map[eatOne];
      i += 1;
    }
  }
  return num
};
// @lc code=end

/*
// @lcpr case=start
// "III"\n
// @lcpr case=end

// @lcpr case=start
// "IV"\n
// @lcpr case=end

// @lcpr case=start
// "IX"\n
// @lcpr case=end

// @lcpr case=start
// "LVIII"\n
// @lcpr case=end

// @lcpr case=start
// "MCMXCIV"\n
// @lcpr case=end

 */
