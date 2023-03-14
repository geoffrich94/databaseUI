import styled from 'styled-components';
import { ProfileIcon as ProfileIcon_ } from 'components';

export const Container = styled.div`
  width: 100%;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  padding: 60px;
  text-align: center;
`;

export const ProfileIcon = styled(ProfileIcon_)`
  margin: auto;
`

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 17px;
  margin-top: 15px;
`;

export const SubHeading = styled.p`
  color: #6B6C6C;
  font-weight: 400;
  font-size: 15px;
  margin: 0px;
`;