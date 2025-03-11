/**
 * [36] 有效的数独
 *
 * @format
 * @lc app=leetcode.cn id=36 lang=javascript
 * @lcpr version=30100
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  function isRepeat(arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== '.' && map.has(arr[i])) {
        return true;
      }

      if (arr[i] !== '.') {
        map.set(arr[i], '1');
      }
    }
    return false;
  }

  let i = 0;
  let isValid = true;
  while (i < board.length) {
    const isRowRepeat = isRepeat(board[i]);
    const isColRepeat = isRepeat(board.map((row) => row[i]));
    const isQuartRepeat = isRepeat(
      new Array(3)
        .fill(0)
        .map((_, row) => [
          board[Math.floor(i / 3) * 3 + row ][(i % 3) * 3 + 0],
          board[Math.floor(i / 3) * 3 + row][(i % 3) * 3 + 1],
          board[Math.floor(i / 3) * 3 + row ][(i % 3) * 3 + 2],
        ]).flat()
    );
    if (isRowRepeat || isColRepeat || isQuartRepeat) {
      isValid = false;
      break;
    }
    i++;
  }
  return isValid;
};
// @lc code=end
// 0 -> 0 0
// 1 -> 0 3
// 2 -> 0 6
// 3 -> 3 0
// 4 -> 3 3
// 5 -> 3 6
// 6 -> 6 0
// 7 -> 6 3
// 8 -> 6 6
/*
// @lcpr case=start
// [[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]]

// @lcpr case=end

 */
