import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-items: center;
  padding: 15px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  box-sizing: border-box;
  width: 100%;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #F2F2F2;
  }
`;

export const Image = styled.img`
  margin-right: 20px;
`