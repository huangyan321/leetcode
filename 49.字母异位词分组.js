/**
 * [49] 字母异位词分组
 *
 * @format
 * @lc app=leetcode.cn id=49 lang=javascript
 * @lcpr version=30101
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 避免哈希冲突
  function encode(s) {
    const arr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      const delta = s[i].charCodeAt() - 'a'.charCodeAt();
      arr[delta]++;
    }

    return arr.toString();
  }

  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const code = encode(strs[i]);

    if (!map.has(code)) {
      map.set(code, []);
    }

    map.get(code).push(strs[i]);
  }
  const res = [];
  for (const item of map.values()) {
    res.push(item);
  }
  return res;
};
// @lc code=end

/*
// @lcpr case=start
// ["eat", "tea", "tan", "ate", "nat", "bat"]\n
// @lcpr case=end

// @lcpr case=start
// [""]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */
