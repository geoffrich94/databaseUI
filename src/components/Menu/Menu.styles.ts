import styled from "styled-components";
import { devices } from "../../theme/breakpoints";
import { HamburgerMenu as HamburgerMenu_ } from "components/HamburgerMenu";

export const HamburgerMenu = styled(HamburgerMenu_)`
  margin-bottom: 40px;
`

export const Container = styled.nav<{ isOpen: boolean }>`
  padding: 30px 15px;
  height: 100%;
  width: 22.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #E5E5E5;
  background: white;
  z-index: 1;
  @media ${devices.tablet} {
    width: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    position: absolute;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-175px')};
    transition: 0.5s;
  }
`;

export const HeadingContainer = styled.div`
  margin-top: 15px;
  text-align: center;
`;

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 17px;
  margin: 0;
`;

export const SubHeading = styled.p`
  color: #6B6C6C;
  font-weight: 400;
  font-size: 15px;
  margin: 0px;
`;