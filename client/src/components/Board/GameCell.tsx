import React, { useState } from 'react';
import { StyledCell } from './Game.styled';
import { useUpdateGameCell } from "../Game.api.hooks";

export const GameCell = ({ row, col, value, isGameRunning }: { row: number, col: number, value: boolean, isGameRunning: boolean }) => {

  const { mutate } = useUpdateGameCell()
  const onClick = () => !isGameRunning && mutate({ row, col, value })
  return (
    <StyledCell value={value} onClick={onClick} />
  );
};

