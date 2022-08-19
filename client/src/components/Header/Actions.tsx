import React from 'react';
import { Button, Stack } from "@mui/material";
import { useGameNext, useGameStart, useGameStateReset, useGameStop } from "../Game.api.hooks";

export const Actions = ({ isGameRunning }: { isGameRunning: boolean }) => {

  const onResetMutation = useGameStateReset()
  const onNextMutation = useGameNext()
  const onStartMutation = useGameStart()
  const onStopMutation = useGameStop()

  const onReset = () => onResetMutation.mutate()
  const onNext = () => onNextMutation.mutate()
  const onRun = () => onStartMutation.mutate()
  const onStop = () => onStopMutation.mutate()

  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={onReset} disabled={isGameRunning}>Reset</Button>
      <Button onClick={onNext} disabled={isGameRunning}>Next</Button>
      <Button onClick={onRun} disabled={isGameRunning} color="success" >Run</Button>
      <Button onClick={onStop} disabled={!isGameRunning} color="error">Stop</Button>
    </Stack>
  );
};

