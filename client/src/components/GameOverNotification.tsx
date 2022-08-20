import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const GameOverNotification = ({ open, onOpen }: { open: boolean, onOpen: (open: boolean) => void }) => {

  const handleClose = () => onOpen(false);

  const action = (
    <IconButton
      size="small"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small"/>
    </IconButton>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Game Over!!!"
        action={action}
      />
    </div>
  );
};

