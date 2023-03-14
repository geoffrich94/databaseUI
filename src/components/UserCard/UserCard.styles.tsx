import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  flex-basis: 45%;

  @media ${devices.tablet} {
    flex-basis: 100%;
  }

  &:hover {
    border: 2px solid #0d1619;
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 17px;
  color: #0d1619;
  margin: 0px;
`;

export const JobTitle = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #6b6c6c;
`;
