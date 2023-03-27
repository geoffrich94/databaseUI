import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const Container = styled.aside<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '35%' : '0')};
  height: 100%;
  border-left: 1px solid #E5E5E5;
  background-color: white;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0; 
  transition: 0.5s;
  @media ${devices.tablet} {
    width: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    transition: 0.5s;
  }
`;

export const SidebarContent = styled.div`
  width: 100%;
  padding: 40px;
  height: 70%;
  display: flex;
  flex-direction: column;
  word-break: break-word;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Heading = styled.h4`
  font-size: 15px;
  color: #6B6C6C;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 17px;
  color: #0D1619;
  font-weight: 400;
`