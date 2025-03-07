/**
 * [6] Z 字形变换
 *
 * @format
 * @lc app=leetcode.cn id=6 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if(numRows < 2) return s
  function helperConstr(num) {
    let index = -1;
    let ahead = true;
    return function helper() {
      if (ahead) {
        index++;
        if (index === num - 1) {
          ahead = false;
        }
        return index;
      }

      index--;
      if (index === 0) {
        ahead = true;
      }
      return index;
    };
  }
  const helper = helperConstr(numRows);

  const arrs = new Array(numRows).fill().map((_) => []);
  let i = helper();
  let charIndex = 0;

  while (charIndex < s.length) {
    var char = s[charIndex];

    arrs[i].push(char);
    i = helper();
    charIndex++;
  }
  let str = '';
  for (let i = 0; i < arrs.length; i++) {
    str += arrs[i].join('');
  }
  return str;
};
// @lc code=end

/*
// @lcpr case=start
// "PAYPALISHIRING"\n3\n
// @lcpr case=end

// @lcpr case=start
// "PAYPALISHIRING"\n4\n
// @lcpr case=end

// @lcpr case=start
// "A"\n1\n
// @lcpr case=end

 */
