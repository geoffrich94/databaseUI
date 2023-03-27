import styled from 'styled-components';
import { devices } from "../../theme/breakpoints";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 77.5%;
  height: 100%;
  @media ${devices.tablet} {
    width: 100%;
  }
`;