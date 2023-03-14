import styled from "styled-components";

export const SearchBar = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  border: 1px solid #BFBFBF;
  border-radius: 8px;
  padding: 10px 15px;

  & img {
    margin-right: 10px;
  }

  & input {
    width: 100%;
    border: none;
    outline: none;
  }
`