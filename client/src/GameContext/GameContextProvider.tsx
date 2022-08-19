import React, { useMemo, useState } from 'react';
import { GameState } from "../App.models";
import { GameCtx } from './GameContext';


type GameContextProviderProps = {
  children: React.ReactNode;
  gameState?: GameState
};

export const GameContextProvider: React.FC<GameContextProviderProps> = ({ children,gameState }) => {
  const [game, setGame] = useState<GameState | undefined>(gameState);
  const value = useMemo(
    () => ({ game, setGame }),
    [game]
  );

  return (
    <GameCtx.Provider value={value}>
      {children}
    </GameCtx.Provider>
  );
};

