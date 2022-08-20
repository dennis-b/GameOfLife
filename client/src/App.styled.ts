import styled from "styled-components";
import { theme } from "./theme/theme";


const resolveSpacingSize = (size: string): any => theme.spacing[size] || size;

export const StyledApp = styled.div`
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;;
  justify-content: center;
`

export const StyledLoaderContainer = styled.div`
  position: absolute;
  inset: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const StyledBox: any = styled.div<any>`
  margin-top: ${({ mt }: { mt: string }) => mt && resolveSpacingSize(mt)};
  margin-bottom: ${({ mb }: { mb: string }) => mb && resolveSpacingSize(mb)};
  margin-left: ${({ ml }: { ml: string }) => ml && resolveSpacingSize(ml)};
  margin-right: ${({ mr }: { mr: string }) => mr && resolveSpacingSize(mr)};
  padding-top: ${({ pt }: { pt: string }) => pt && resolveSpacingSize(pt)};
  padding-bottom: ${({ pb }: { pb: string }) => pb && resolveSpacingSize(pb)};
  padding-left: ${({ pl }: { pl: string }) => pl && resolveSpacingSize(pl)};
  padding-right: ${({ pr }: { pr: string }) => pr && resolveSpacingSize(pr)};
  display: ${({ display }: { display: string }) => display};
  flex-direction: ${({ flexDirection }: { flexDirection: string }) => flexDirection};
  flex-wrap: ${({ flexWrap }: { flexWrap: string }) => flexWrap};
  flex: ${({ flex }: { flex: string }) => flex};
  justify-content: ${({ justifyContent }: { justifyContent: string }) => justifyContent};
  align-items: ${({ alignItems }: { alignItems: string }) => alignItems};
  row-gap: ${({ rowGap }: { rowGap: string }) => rowGap && resolveSpacingSize(rowGap)};
  column-gap: ${({ colGap }: { colGap: string }) => colGap && resolveSpacingSize(colGap)};
  width: ${({ width }: { width: string }) => width};
`;
