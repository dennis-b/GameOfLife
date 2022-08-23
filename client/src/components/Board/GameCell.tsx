import React, { useState } from 'react';
import { StyledCell } from './Game.styled';
import { useUpdateGameCell } from "../Game.api.hooks";

interface GameCellProps {
    row: number,
    col: number,
    value: boolean,
    isGameRunning: boolean
}

export const GameCell = React.memo(({ row, col, value, isGameRunning }: GameCellProps) => {

    const { mutate } = useUpdateGameCell()
    const onClick = () => !isGameRunning && mutate({ row, col, value })
    return (
        <StyledCell value={value} onClick={onClick}/>
    );
});

