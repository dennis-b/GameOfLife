
export type Board = Array<Array<boolean>>

export interface GameState {
  board: Board;
  step: number;
  running: boolean;
  isAllDead: boolean;
}

export interface GameConfigState {
  game: GameState;
  cols: number;
  rows: number;
}
