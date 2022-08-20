import React from 'react';
import { StyledGame, StyleGameContainer } from './Game.styled';
import { GameBoard } from "./GameBoard";
import { useGameState } from "../Game.api.hooks";
import { GameContextProvider } from "../../GameContext/GameContextProvider";
import { GamePlaySubscriber } from "./GamePlaySubscriber";
import { GameHeader } from "../Header/GameHeader";
import { GameLoader } from "../GameLoader";

export const Game: React.FC = () => {
  const { data, isLoading } = useGameState()
  if (isLoading) {
    return <GameLoader />
  }
  return (
    <GameContextProvider gameState={data?.game}>
      <GamePlaySubscriber/>
      <StyleGameContainer>
        <GameHeader/>
        <StyledGame rows={data?.rows} cols={data?.cols}>
          <GameBoard/>
        </StyledGame>
      </StyleGameContainer>
    </GameContextProvider>

  );
};

