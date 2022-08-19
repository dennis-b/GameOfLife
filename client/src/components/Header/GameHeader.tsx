import React from 'react';
import { Typography } from "@mui/material";
import { Actions } from "./Actions";
import { useGameContext } from "../../GameContext/GameContext";
import { StyledHeader } from '../Board/Game.styled';

export const GameHeader = () => {
  const { game } = useGameContext()
  return (
    <StyledHeader direction="row" spacing={2}>
      <Actions isGameRunning={game?.running}/>
      <Typography>Step: {game?.step} </Typography>
    </StyledHeader>
  );
};

