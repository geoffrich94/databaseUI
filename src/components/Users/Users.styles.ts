import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`

export const UsersContent = styled.div`
  padding: 50px;
  width: 65%;
  @media ${devices.tablet} {
    width: 100%;
  }
`

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const Paragraph = styled.p`
  margin-bottom: 25px;
`