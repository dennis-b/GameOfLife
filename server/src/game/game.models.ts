
export type Board = Array<Array<boolean>>

export interface GameState {
  board: Board;
  step: number;
  running: boolean;
  isAllDead: boolean;
}
