import { Board, GameState } from "../App.models";
import { createContext, useContext } from "react";

export type GameContext = {
  game: GameState | undefined
  setGame:(game: GameState) => void
}

export const GameCtx = createContext<GameContext>({
  game: undefined,
  setGame: () => {
  }
});

export const useGameContext = () => useContext(GameCtx)
