const isValidSudoku = function (board) {
  // total O(9^9 * 3) space O(9 * 3)
  // time (243) space (81)

  for (let i = 0; i < board.length; i++) {
    const uniqueRow = new Set()

    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== '.' && !uniqueRow.has(board[i][j])) {
        uniqueRow.add(board[i][j])
      } else if (uniqueRow.has(board[i][j])) {
        return false
      }
    }
  } // time (9^2) space (9)

  for (let i = 0; i < board.length; i++) {
    const uniqueColumn = new Set()

    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== '.' && !uniqueColumn.has(board[j][i])) {
        uniqueColumn.add(board[j][i])
      } else if (uniqueColumn.has(board[j][i])) {
        return false
      }
    }
  } // time (9^2) space (9)

  for (let i = 0; i < 9; i++) {
    const uniqueSubGrid = new Set()

    const incrementJ = Math.floor(i / 3) * 3
    const incrementK = (i % 3) * 3

    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (
          board[j + incrementJ][k + incrementK] !== '.' &&
          !uniqueSubGrid.has(board[j + incrementJ][k + incrementK])
        ) {
          uniqueSubGrid.add(board[j + incrementJ][k + incrementK])
        } else if (uniqueSubGrid.has(board[j + incrementJ][k + incrementK])) {
          return false
        }
      }
    } // time (9^(3^3)) -> (9^9) space (9)

    console.log('----')
  }

  return true
}

module.exports = isValidSudoku;