import React from 'react';
import { GameCell } from "./GameCell";
import { useGameContext } from "../../GameContext/GameContext";

export const GameBoard = () => {
  const { game } = useGameContext()
  console.log({ game })
  return (
    <>
      {
        game?.board?.map((row, i) =>
          row.map((col, j) => (
            <GameCell
              key={`${i}_${j}`}
              row={i}
              col={j}
              value={game?.board[i][j]}
              isGameRunning={game?.running}
            />
          ))
        )
      }
    </>
  );
};

