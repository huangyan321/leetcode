/*
 * @lc app=leetcode.cn id=48 lang=javascript
 * @lcpr version=30101
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];

      matrix[j][i] = temp;
    }
  }
  function reverse(arr) {
    let left = 0,
      right = arr.length - 1;

    while (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left ++
      right --
    }
  }

  let i = 0;

  while (i < matrix.length) {
    reverse(matrix[i]);

    i++;
  }
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n
// @lcpr case=end

 */

