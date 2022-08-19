import { Board, GameState } from "./game.models";
import { CELLS_POSITIONS, COLS, ROWS } from "./game.constants";

export function initGame(): GameState {
  const initGameBoard = new Array(ROWS);
  for (let i = 0; i < initGameBoard.length; i++) {
    initGameBoard[i] = new Array(COLS).fill(false);
  }
  return {
    board: initGameBoard,
    running: false,
    step: 0,
    isAllDead: true
  }
}

export function getNextBoard(board: Board) {
  let isAllDead = true
  const nextStepBoard = board.map((row, i) => row.map((cell, j) => {
      let sum = 0
      CELLS_POSITIONS.forEach((position) => {
        const x = i + position[0]
        const y = j + position[1]
        if (x >= 0 && x < ROWS && y >= 0 && y < COLS) {
          sum += board[x][y] ? 1 : 0
        }
      })
      if (sum < 2 || sum > 3) {
        return false
      }
      if (sum === 3) {
        isAllDead = false
        return true
      }
      return board[i][j]
    })
  )
  return { board: nextStepBoard, isAllDead }
}
