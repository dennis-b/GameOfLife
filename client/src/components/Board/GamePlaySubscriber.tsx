import React, { useEffect } from 'react';
import { useGameStateEvent } from "../../hooks/useGameStateEvent";
import { GameOverNotification } from "../GameOverNotification";
import { useGameStop } from "../Game.api.hooks";

export const GamePlaySubscriber = () => {
  const { game } = useGameStateEvent();
  const [open, setOpen] = React.useState(false);
  const onStopMutation = useGameStop()

  useEffect(() => {
    if (game?.isAllDead && game?.running) {
      console.log('all dead')
      onStopMutation.mutate()
      setOpen(true)
    }

  }, [game?.isAllDead, game?.running])

  return (
    <GameOverNotification open={open} onOpen={setOpen}/>
  );
};

