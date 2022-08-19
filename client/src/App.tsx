import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./App.styled";
import { theme } from "./theme/theme";
import { GameContextProvider } from "./GameContext/GameContextProvider";
import React from "react";
import { Game } from "./components/Board/Game";

const queryClient = new QueryClient({});

function App() {
  return (
    <StyledApp>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Game/>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledApp>
  )
}

export default App
