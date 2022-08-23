import React, { useMemo, useState } from 'react';
import { GameState } from "../App.models";
import { GameCtx, GameCtxApi } from './GameContext';

type GameContextProviderProps = {
    children: React.ReactNode;
    gameState?: GameState
};

export const GameContextProvider: React.FC<GameContextProviderProps> = ({ children, gameState }) => {
    const [game, setGame] = useState<GameState | undefined>(gameState);
    const gameCtxValue = useMemo(
        () => ({ game }),
        [game]
    );
    const gameCtxApiValue = useMemo(
        () => ({ setGame }), []
    );

    return (
        <GameCtxApi.Provider value={gameCtxApiValue}>
            <GameCtx.Provider value={gameCtxValue}>
                {children}
            </GameCtx.Provider>
        </GameCtxApi.Provider>
    );
};

