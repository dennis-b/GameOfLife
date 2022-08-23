import { GameState } from "../App.models";
import { createContext, useContext } from "react";

export type GameContext = {
  game: GameState | undefined
}

export type GameContextApi = {
  setGame:(game: GameState) => void
}

export const GameCtx = createContext<GameContext>({
  game: undefined,
});

export const GameCtxApi = createContext<GameContextApi>({
  setGame: () => {
  }
});

export const useGameContext = () => useContext(GameCtx)
export const useGameApiContext = () => useContext(GameCtxApi)
