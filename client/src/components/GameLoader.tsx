import React from 'react';
import { StyledLoaderContainer } from "../App.styled";
import { CircularProgress, Typography } from "@mui/material";

export const GameLoader = () => {
    return (
        <StyledLoaderContainer>
            <Typography>Loading...</Typography>
            <CircularProgress />
        </StyledLoaderContainer>
    );
};
