import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const Container = styled.div<{ toggleBar?: boolean }>`
  cursor: pointer;
  display: none;
  @media ${devices.tablet} {
    display: ${({ toggleBar }) => (toggleBar ? "block" : "none")};
  }
`;

export const Panel = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`;
