import styled from "styled-components";
import { theme } from "./theme/theme";


const resolveSpacingSize = (size: string): any => theme.spacing[size] || size;

export const StyledApp = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;;
  justify-content: center;
`

export const StyledLabel = styled.div`
  font-weight: 500;

`

export const StyledTitle = styled.h1`
  font-weight: bold;
`

export const StyleCard = styled.div`
  width: 32%;
  max-width: 32%;
  height: 20rem;
  display: flex;
  flex-direction: column;
`

export const StylesVideoCardImage = styled.div`
  flex: 0.7;
  background-image: ${({ src }: { src: string }) => `url(${src})`};
  background-size: cover;
`

export const StyleVideoCardFooter = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  background-color: #e9e0d7;
  align-items: center;
  justify-content: center;
`


export const StyledContent = styled.div`
  overflow: auto;
  width: 100%;
`

export const StyledInput = styled.input`
  height: 34px;
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: hsl(0, 0%, 50%);
  font-size: 15px;
  padding: 2px 8px;
`

export const StyledMessage = styled.div`
  height: 3rem;
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
