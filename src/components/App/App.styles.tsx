import styled from "styled-components";
import { HamburgerMenu as HamburgerMenu_ } from "components/HamburgerMenu";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const HamburgerMenu = styled(HamburgerMenu_)`
  position: absolute;
  z-index: 1;
  top: 15px;
  left: 15px;
`;
