import styled from "styled-components";
import { CELL_HEIGHT, CELL_WIDTH } from "../../App.constants";
import { Stack } from "@mui/material";

export const StyleGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledGame: any = styled.div<{ rows: number, cols: number }>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ rows }) => rows * CELL_WIDTH}px;
  height: ${({ cols }) => cols * CELL_HEIGHT}px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 14px 3px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14)
`
export const StyledCell = styled.div`
  width: ${CELL_WIDTH}px;
  height: ${CELL_HEIGHT}px;
  border: solid 1px gray;
  box-sizing: border-box;
  background-color: ${({ value }: { value: boolean }) => value ? 'red' : 'transparent'};
`

export const StyledHeader = styled(Stack)`
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;

`

