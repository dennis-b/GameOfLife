import { COLS, ROWS } from "./App.constants";
import { Board } from "./App.models";

export function initGame(): Board {
  const initGameBoard = new Array(5);
  for (let i = 0; i < initGameBoard.length; i++) {
    initGameBoard[i] = new Array(5).fill(false);
  }
  return initGameBoard
}
